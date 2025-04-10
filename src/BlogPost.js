import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { getBlogPostContent } from './notion';

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

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 30px;
  color: #F4C85F;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

// Basic function to render Notion blocks (can be expanded later)
const renderNotionBlock = (block) => {
  switch (block.type) {
    case 'heading_1':
      return <h1 key={block.id}>{block.heading_1.rich_text[0]?.plain_text}</h1>;
    case 'heading_2':
      return <h2 key={block.id}>{block.heading_2.rich_text[0]?.plain_text}</h2>;
    case 'heading_3':
      return <h3 key={block.id}>{block.heading_3.rich_text[0]?.plain_text}</h3>;
    case 'paragraph':
      // Basic paragraph rendering - doesn't handle rich text formatting (bold, italic, links) yet
      return <p key={block.id}>{block.paragraph.rich_text.map(text => text.plain_text).join('')}</p>;
    // TODO: Add cases for other block types (bulleted_list_item, numbered_list_item, image, code, etc.)
    default:
      console.log("Unsupported block type:", block.type);
      return <p key={block.id}>[Unsupported block type: {block.type}]</p>; // Show unsupported type for debugging
  }
};

const BlogPost = () => {
  const { postId } = useParams(); // Get postId from URL
  const [postContent, setPostContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      if (!postId) return;
      try {
        setLoading(true);
        const blocks = await getBlogPostContent(postId);
        setPostContent(blocks);
        setError(null);
      } catch (err) {
        console.error("Error fetching post content:", err);
        setError('Failed to load post content.');
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [postId]); // Re-fetch if postId changes

  if (loading) {
    return <BlogPostWrapper><p style={{ textAlign: 'center', color: '#ccc' }}>Loading content...</p></BlogPostWrapper>;
  }

  if (error) {
    return <BlogPostWrapper><p style={{ textAlign: 'center', color: 'red' }}>{error}</p></BlogPostWrapper>;
  }

  return (
    <BlogPostWrapper>
      <BackLink to="/blog">&larr; Back to Blog List</BackLink>
      {postContent.length > 0 
        ? postContent.map(renderNotionBlock)
        : <p>This post appears to be empty.</p>}
    </BlogPostWrapper>
  );
};

export default BlogPost; 