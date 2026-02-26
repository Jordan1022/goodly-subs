import { Client } from '@notionhq/client';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const contentDir = path.join(projectRoot, 'public', 'content');
const postsDir = path.join(contentDir, 'blog-posts');
const indexFile = path.join(contentDir, 'blog-index.json');

const notionApiKey = process.env.NOTION_API_KEY || process.env.REACT_APP_NOTION_API_KEY;
const notionDatabaseId = process.env.NOTION_DATABASE_ID || process.env.REACT_APP_NOTION_DATABASE_ID;

const toPlainText = (richText = []) => richText.map((entry) => entry?.plain_text || '').join('').trim();

const slugify = (value) =>
  (value || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

const extractTitle = (page) => toPlainText(page?.properties?.Title?.title) || 'Untitled';

const extractSlug = (page) => {
  const slugProperty = page?.properties?.Slug;

  if (!slugProperty) {
    return '';
  }

  if (slugProperty.type === 'rich_text') {
    return toPlainText(slugProperty.rich_text);
  }

  if (slugProperty.type === 'formula') {
    return slugProperty.formula?.string || '';
  }

  return '';
};

const extractSummary = (page, blocks) => {
  const summaryFromProperty = toPlainText(page?.properties?.Summary?.rich_text);

  if (summaryFromProperty) {
    return summaryFromProperty;
  }

  const firstParagraph = blocks.find(
    (block) => block.type === 'paragraph' && Array.isArray(block.paragraph?.rich_text) && block.paragraph.rich_text.length
  );

  if (!firstParagraph) {
    return '';
  }

  return toPlainText(firstParagraph.paragraph.rich_text).slice(0, 240);
};

const ensureBaseFiles = async () => {
  await fs.mkdir(postsDir, { recursive: true });

  try {
    await fs.access(indexFile);
  } catch {
    const emptyIndex = {
      generatedAt: new Date().toISOString(),
      posts: [],
    };

    await fs.writeFile(indexFile, `${JSON.stringify(emptyIndex, null, 2)}\n`, 'utf8');
  }
};

const fetchPublishedPages = async (notion) => {
  const pages = [];
  let cursor = undefined;

  while (true) {
    const response = await notion.databases.query({
      database_id: notionDatabaseId,
      filter: {
        property: 'Status',
        select: {
          equals: 'Published',
        },
      },
      sorts: [
        {
          property: 'Published Date',
          direction: 'descending',
        },
      ],
      start_cursor: cursor,
      page_size: 100,
    });

    pages.push(...response.results);

    if (!response.has_more) {
      break;
    }

    cursor = response.next_cursor;
  }

  return pages;
};

const fetchAllBlocks = async (notion, pageId) => {
  const blocks = [];
  let cursor = undefined;

  while (true) {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
      page_size: 100,
    });

    blocks.push(...response.results);

    if (!response.has_more) {
      break;
    }

    cursor = response.next_cursor;
  }

  return blocks;
};

const ensureUniqueSlug = (candidate, usedSlugs) => {
  const base = candidate || 'post';
  let nextSlug = base;
  let suffix = 2;

  while (usedSlugs.has(nextSlug)) {
    nextSlug = `${base}-${suffix}`;
    suffix += 1;
  }

  usedSlugs.add(nextSlug);
  return nextSlug;
};

const writeBlogFiles = async (posts) => {
  await fs.mkdir(postsDir, { recursive: true });

  const postEntries = posts.map((post) => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    summary: post.summary,
    publishedDate: post.publishedDate,
    lastEditedTime: post.lastEditedTime,
    author: post.author,
  }));

  const indexPayload = {
    generatedAt: new Date().toISOString(),
    posts: postEntries,
  };

  await fs.writeFile(indexFile, `${JSON.stringify(indexPayload, null, 2)}\n`, 'utf8');

  await Promise.all(
    posts.map((post) =>
      fs.writeFile(path.join(postsDir, `${post.slug}.json`), `${JSON.stringify(post, null, 2)}\n`, 'utf8')
    )
  );
};

const run = async () => {
  await ensureBaseFiles();

  if (!notionApiKey || !notionDatabaseId) {
    console.warn(
      '[build-blog-content] NOTION_API_KEY/NOTION_DATABASE_ID not set. Keeping existing static blog content.'
    );
    return;
  }

  try {
    const notion = new Client({ auth: notionApiKey });
    const pages = await fetchPublishedPages(notion);
    const usedSlugs = new Set();
    const posts = [];

    for (const page of pages) {
      const title = extractTitle(page);
      const derivedSlug = slugify(extractSlug(page)) || slugify(title) || page.id.slice(0, 8);
      const slug = ensureUniqueSlug(derivedSlug, usedSlugs);
      const blocks = await fetchAllBlocks(notion, page.id);

      posts.push({
        id: page.id,
        slug,
        title,
        summary: extractSummary(page, blocks),
        publishedDate: page?.properties?.['Published Date']?.date?.start || null,
        lastEditedTime: page.last_edited_time || null,
        author: page.created_by?.name || 'Jordan Allen',
        blocks,
      });
    }

    await writeBlogFiles(posts);
    console.log(`[build-blog-content] Exported ${posts.length} published post(s).`);
  } catch (error) {
    console.warn('[build-blog-content] Failed to export Notion content:', error.message);
    console.warn('[build-blog-content] Continuing build with existing static blog content.');
  }
};

run();
