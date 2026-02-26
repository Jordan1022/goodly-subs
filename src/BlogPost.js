import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { getBlogPostContent } from './notion';
import SeoHead from './seo/SeoHead';
import { getBlogPostMeta, routeMeta } from './seo/routeMeta';
import { buildStructuredData } from './seo/structuredData';

const BlogPostWrapper = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 40px;
  background-color: #1a1a1a; 
  border-radius: 8px;
  color: #fff; 
  line-height: 1.7;

  h1, h2, h3 {
    color: #F4C85F; 
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: #F4C85F;
    text-decoration: underline;
    &:hover {
      filter: brightness(1.2);
    }
  }

  /* Add styles for other Notion blocks here later (lists, images, code, etc.) */
`;

const PostDate = styled.p`
  color: #ccc;
  margin-top: -0.5rem;
  margin-bottom: 1.5rem;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 30px;
  color: #F4C85F;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const renderRichText = (richText = []) =>
  richText.map((segment, index) => {
    const plainText = segment?.plain_text || '';
    let node = plainText;

    if (segment?.href) {
      node = (
        <a href={segment.href} target="_blank" rel="noopener noreferrer">
          {node}
        </a>
      );
    }

    if (segment?.annotations?.code) {
      node = <code>{node}</code>;
    }

    if (segment?.annotations?.bold) {
      node = <strong>{node}</strong>;
    }

    if (segment?.annotations?.italic) {
      node = <em>{node}</em>;
    }

    return <React.Fragment key={`${segment?.href || plainText}-${index}`}>{node}</React.Fragment>;
  });

const renderSingleBlock = (block) => {
  switch (block.type) {
    case 'heading_1':
      return <h1 key={block.id}>{renderRichText(block.heading_1?.rich_text)}</h1>;
    case 'heading_2':
      return <h2 key={block.id}>{renderRichText(block.heading_2?.rich_text)}</h2>;
    case 'heading_3':
      return <h3 key={block.id}>{renderRichText(block.heading_3?.rich_text)}</h3>;
    case 'paragraph':
      return <p key={block.id}>{renderRichText(block.paragraph?.rich_text)}</p>;
    case 'quote':
      return <blockquote key={block.id}>{renderRichText(block.quote?.rich_text)}</blockquote>;
    case 'code':
      return (
        <pre key={block.id}>
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
    if (!listType || listItems.length === 0) {
      return;
    }

    if (listType === 'bulleted') {
      output.push(<ul key={`list-bulleted-${output.length}`}>{listItems}</ul>);
    } else {
      output.push(<ol key={`list-numbered-${output.length}`}>{listItems}</ol>);
    }

    listType = null;
    listItems = [];
  };

  blocks.forEach((block) => {
    if (block.type === 'bulleted_list_item') {
      if (listType !== 'bulleted') {
        flushList();
        listType = 'bulleted';
      }

      const item = renderSingleBlock(block);
      if (item) {
        listItems.push(item);
      }
      return;
    }

    if (block.type === 'numbered_list_item') {
      if (listType !== 'numbered') {
        flushList();
        listType = 'numbered';
      }

      const item = renderSingleBlock(block);
      if (item) {
        listItems.push(item);
      }
      return;
    }

    flushList();
    const rendered = renderSingleBlock(block);
    if (rendered) {
      output.push(rendered);
    }
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
      if (!slug) {
        return;
      }

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
      <BlogPostWrapper>
        <SeoHead meta={meta} structuredData={structuredData} />
        <p style={{ textAlign: 'center', color: '#ccc' }}>Loading content...</p>
      </BlogPostWrapper>
    );
  }

  if (error) {
    return (
      <BlogPostWrapper>
        <SeoHead meta={meta} structuredData={structuredData} />
        <BackLink to="/blog">&larr; Back to Blog List</BackLink>
        <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>
      </BlogPostWrapper>
    );
  }

  return (
    <BlogPostWrapper>
      <SeoHead meta={meta} structuredData={structuredData} />
      <BackLink to="/blog">&larr; Back to Blog List</BackLink>
      <h1>{post?.title || 'Blog Post'}</h1>
      {post?.publishedDate && <PostDate>Published: {post.publishedDate}</PostDate>}
      {Array.isArray(post?.blocks) && post.blocks.length > 0
        ? renderNotionBlocks(post.blocks)
        : <p>This post appears to be empty.</p>}
    </BlogPostWrapper>
  );
};

export default BlogPost; 
