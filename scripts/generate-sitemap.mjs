import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const SITE_URL = 'https://goodlydevelopment.com';
const sitemapPath = path.join(projectRoot, 'public', 'sitemap.xml');
const blogIndexPath = path.join(projectRoot, 'public', 'content', 'blog-index.json');

const staticRoutes = ['/', '/it-services', '/web-services', '/blog', '/support', '/privacy'];

const toAbsoluteUrl = (pathname) => (pathname === '/' ? SITE_URL : `${SITE_URL}${pathname}`);

const createUrlNode = ({ loc, lastmod }) => {
  const modTag = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : '';
  return `  <url>\n    <loc>${loc}</loc>${modTag}\n  </url>`;
};

const loadBlogEntries = async () => {
  try {
    const raw = await fs.readFile(blogIndexPath, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed.posts) ? parsed.posts : [];
  } catch {
    return [];
  }
};

const run = async () => {
  const blogPosts = await loadBlogEntries();

  const nodes = [
    ...staticRoutes.map((pathname) =>
      createUrlNode({
        loc: toAbsoluteUrl(pathname),
      })
    ),
    ...blogPosts
      .filter((post) => post?.slug)
      .map((post) =>
        createUrlNode({
          loc: toAbsoluteUrl(`/blog/${post.slug}`),
          lastmod: post.lastEditedTime || post.publishedDate || undefined,
        })
      ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${nodes.join(
    '\n'
  )}\n</urlset>\n`;

  await fs.writeFile(sitemapPath, xml, 'utf8');
  console.log(`[generate-sitemap] Wrote ${nodes.length} URL(s) to public/sitemap.xml`);
};

run();
