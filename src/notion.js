const BLOG_INDEX_PATH = '/content/blog-index.json';
const BLOG_POSTS_PATH = '/content/blog-posts';

const fetchJson = async (url) => {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Request failed for ${url} with status ${response.status}`);
  }

  return response.json();
};

export const getPublishedBlogPosts = async () => {
  try {
    const payload = await fetchJson(BLOG_INDEX_PATH);
    return Array.isArray(payload.posts) ? payload.posts : [];
  } catch (error) {
    console.error('Failed to fetch static blog index:', error);
    return [];
  }
};

export const getBlogPostContent = async (slugOrId) => {
  try {
    const indexPayload = await fetchJson(BLOG_INDEX_PATH);
    const posts = Array.isArray(indexPayload.posts) ? indexPayload.posts : [];
    const matched = posts.find((post) => post.slug === slugOrId || post.id === slugOrId);

    if (!matched?.slug) {
      return null;
    }

    const postPayload = await fetchJson(`${BLOG_POSTS_PATH}/${matched.slug}.json`);
    return postPayload;
  } catch (error) {
    console.error('Failed to fetch static blog post content:', error);
    return null;
  }
};
