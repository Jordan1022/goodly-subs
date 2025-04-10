import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getPublishedBlogPosts } from './notion';

const BlogListWrapper = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #1a1a1a; // Slightly lighter background for contrast
  border-radius: 8px;

  h2 {
    color: #F4C85F;
    text-align: center;
    margin-bottom: 30px;
    font-family: 'Knoxville', sans-serif; // Use existing header font if desired
  }
`;

const PostList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PostItem = styled.li`
  margin-bottom: 15px;
  border-bottom: 1px solid #333; // Separator line
  padding-bottom: 15px;

  &:last-child {
    border-bottom: none;
  }
`;

const PostLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #F4C85F;
  }
`;

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const fetchedPosts = await getPublishedBlogPosts();
        setPosts(fetchedPosts);
        setError(null);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError('Failed to load posts.');
        setPosts([]); // Clear posts on error
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) {
    return <BlogListWrapper><p style={{ textAlign: 'center', color: '#ccc' }}>Loading posts...</p></BlogListWrapper>;
  }

  if (error) {
    return <BlogListWrapper><p style={{ textAlign: 'center', color: 'red' }}>{error}</p></BlogListWrapper>;
  }

  if (posts.length === 0) {
    return <BlogListWrapper><p style={{ textAlign: 'center', color: '#ccc' }}>No published posts found.</p></BlogListWrapper>;
  }

  return (
    <BlogListWrapper>
      <h2>Blog</h2>
      <PostList>
        {posts.map((post) => (
          <PostItem key={post.id}>
            {/* Link to the post detail page using the Notion Page ID */}
            <PostLink to={`/blog/${post.id}`}>
              {post.title}
            </PostLink>
            {/* Optionally display summary or date here */}
          </PostItem>
        ))}
      </PostList>
    </BlogListWrapper>
  );
};

export default BlogList; 