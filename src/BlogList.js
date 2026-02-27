import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPublishedBlogPosts } from './notion';

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
        console.error('Error fetching posts:', err);
        setError('Failed to load posts.');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto py-16">
        <p className="text-center text-[var(--text-muted)]">Loading posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto py-16">
        <p className="text-center text-red-500">{error}</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-16">
        <p className="text-center text-[var(--text-muted)]">No published posts found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-10">Blog</h1>
      <div className="flex flex-col gap-0">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.slug || post.id}`}
            className="group block py-6 border-b border-[var(--border)] last:border-b-0 transition-colors"
          >
            <h2 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
              {post.title}
            </h2>
            {post.summary && (
              <p className="mt-2 text-[var(--text-secondary)] text-sm leading-relaxed line-clamp-2">
                {post.summary}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
