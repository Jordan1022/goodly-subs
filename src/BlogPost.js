import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogPostContent } from './notion';
import SeoHead from './seo/SeoHead';
import { getBlogPostMeta, routeMeta } from './seo/routeMeta';
import { buildStructuredData } from './seo/structuredData';

const renderRichText = (richText = []) =>
  richText.map((segment, index) => {
    const plainText = segment?.plain_text || '';
    let node = plainText;

    if (segment?.href) {
      node = (
        <a
          href={segment.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent)] underline hover:opacity-80 transition-opacity"
        >
          {node}
        </a>
      );
    }

    if (segment?.annotations?.code) {
      node = (
        <code className="bg-[var(--bg-secondary)] px-1.5 py-0.5 rounded text-sm">
          {node}
        </code>
      );
    }

    if (segment?.annotations?.bold) node = <strong>{node}</strong>;
    if (segment?.annotations?.italic) node = <em>{node}</em>;

    return <React.Fragment key={`${segment?.href || plainText}-${index}`}>{node}</React.Fragment>;
  });

const renderSingleBlock = (block) => {
  switch (block.type) {
    case 'heading_1':
      return (
        <h1 key={block.id} className="text-3xl font-bold text-[var(--text-primary)] mt-10 mb-4">
          {renderRichText(block.heading_1?.rich_text)}
        </h1>
      );
    case 'heading_2':
      return (
        <h2 key={block.id} className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-3">
          {renderRichText(block.heading_2?.rich_text)}
        </h2>
      );
    case 'heading_3':
      return (
        <h3 key={block.id} className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">
          {renderRichText(block.heading_3?.rich_text)}
        </h3>
      );
    case 'paragraph':
      return (
        <p key={block.id} className="text-[var(--text-secondary)] text-base leading-relaxed mb-5">
          {renderRichText(block.paragraph?.rich_text)}
        </p>
      );
    case 'quote':
      return (
        <blockquote
          key={block.id}
          className="border-l-4 border-[var(--accent)] pl-5 my-6 text-[var(--text-secondary)] italic"
        >
          {renderRichText(block.quote?.rich_text)}
        </blockquote>
      );
    case 'code':
      return (
        <pre
          key={block.id}
          className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg p-4 my-6 overflow-x-auto text-sm"
        >
          <code>{renderRichText(block.code?.rich_text)}</code>
        </pre>
      );
    case 'bulleted_list_item':
      return <li key={block.id}>{renderRichText(block.bulleted_list_item?.rich_text)}</li>;
    case 'numbered_list_item':
      return <li key={block.id}>{renderRichText(block.numbered_list_item?.rich_text)}</li>;
    default:
      return null;
  }
};

const renderNotionBlocks = (blocks = []) => {
  const output = [];
  let listType = null;
  let listItems = [];

  const flushList = () => {
    if (!listType || listItems.length === 0) return;
    if (listType === 'bulleted') {
      output.push(
        <ul key={`list-bulleted-${output.length}`} className="list-disc pl-6 my-4 flex flex-col gap-2 text-[var(--text-secondary)]">
          {listItems}
        </ul>
      );
    } else {
      output.push(
        <ol key={`list-numbered-${output.length}`} className="list-decimal pl-6 my-4 flex flex-col gap-2 text-[var(--text-secondary)]">
          {listItems}
        </ol>
      );
    }
    listType = null;
    listItems = [];
  };

  blocks.forEach((block) => {
    if (block.type === 'bulleted_list_item') {
      if (listType !== 'bulleted') { flushList(); listType = 'bulleted'; }
      const item = renderSingleBlock(block);
      if (item) listItems.push(item);
      return;
    }
    if (block.type === 'numbered_list_item') {
      if (listType !== 'numbered') { flushList(); listType = 'numbered'; }
      const item = renderSingleBlock(block);
      if (item) listItems.push(item);
      return;
    }
    flushList();
    const rendered = renderSingleBlock(block);
    if (rendered) output.push(rendered);
  });

  flushList();
  return output;
};

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      if (!slug) return;
      try {
        setLoading(true);
        const postPayload = await getBlogPostContent(slug);
        if (!postPayload) {
          setPost(null);
          setError('This blog post could not be found.');
        } else {
          setPost(postPayload);
          setError(null);
        }
      } catch (err) {
        console.error('Error fetching post content:', err);
        setError('Failed to load post content.');
        setPost(null);
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, [slug]);

  const meta = post ? getBlogPostMeta(post) : routeMeta.blogIndex;
  const structuredData = buildStructuredData({
    routeKey: post ? 'blogPost' : 'blogIndex',
    post,
  });

  if (loading) {
    return (
      <article className="max-w-2xl mx-auto py-16">
        <SeoHead meta={meta} structuredData={structuredData} />
        <p className="text-center text-[var(--text-muted)]">Loading content...</p>
      </article>
    );
  }

  if (error) {
    return (
      <article className="max-w-2xl mx-auto py-16">
        <SeoHead meta={meta} structuredData={structuredData} />
        <Link
          to="/blog"
          className="inline-flex items-center text-sm text-[var(--accent)] hover:underline mb-8"
        >
          &larr; Back to Blog
        </Link>
        <p className="text-center text-red-500">{error}</p>
      </article>
    );
  }

  return (
    <article className="max-w-2xl mx-auto py-16">
      <SeoHead meta={meta} structuredData={structuredData} />
      <Link
        to="/blog"
        className="inline-flex items-center text-sm text-[var(--accent)] hover:underline mb-8"
      >
        &larr; Back to Blog
      </Link>
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-2">
        {post?.title || 'Blog Post'}
      </h1>
      {post?.publishedDate && (
        <p className="text-[var(--text-muted)] text-sm mb-10">{post.publishedDate}</p>
      )}
      <div>
        {Array.isArray(post?.blocks) && post.blocks.length > 0
          ? renderNotionBlocks(post.blocks)
          : <p className="text-[var(--text-muted)]">This post appears to be empty.</p>}
      </div>
    </article>
  );
};

export default BlogPost;
