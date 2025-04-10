import { Client } from "@notionhq/client";

// Initializing a client
const notion = new Client({
  auth: process.env.REACT_APP_NOTION_API_KEY,
});

export const databaseId = process.env.REACT_APP_NOTION_DATABASE_ID;

// TODO: Add function to fetch blog posts from the database
export const getPublishedBlogPosts = async () => {
  if (!databaseId) {
    console.error("Notion Database ID not found in environment variables.");
    return [];
  }
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Status", // Filter by the 'Status' property
        select: {
          equals: "Published", // Only fetch pages where Status is 'Published'
        },
      },
      sorts: [
        {
          property: "Published Date", // Optional: Sort by published date
          direction: "descending",
        },
      ],
    });
    // TODO: Map response.results to a cleaner format
    // Map results to a cleaner format
    const posts = response.results.map((post) => {
      // Safely access properties, providing default values
      const title = post.properties.Title?.title?.[0]?.plain_text ?? "Untitled";
      const slug = post.properties.Slug?.rich_text?.[0]?.plain_text ?? post.id; // Use ID as fallback slug

      // You can add more properties here as needed, e.g., summary, date
      // const summary = post.properties.Summary?.rich_text?.[0]?.plain_text ?? "";
      // const publishedDate = post.properties['Published Date']?.date?.start ?? null;

      return {
        id: post.id,
        title,
        slug,
        // summary,
        // publishedDate,
      };
    });
    return posts;
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return [];
  }
};

// TODO: Add function to fetch a single blog post's content
export const getBlogPostContent = async (pageId) => {
  try {
    // Fetch block children (content) for the given page ID
    const response = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100, // Adjust as needed, max 100 per request
    });
    // TODO: Handle pagination if needed for longer posts
    // TODO: Convert Notion blocks to React components/HTML
    return response.results;
  } catch (error) {
    console.error("Failed to fetch blog post content:", error);
    return [];
  }
};


export default notion; 