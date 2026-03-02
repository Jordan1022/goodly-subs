const SITE_URL = 'https://goodlydevelopment.com';
const SITE_NAME = 'Goodly Development';
const DEFAULT_OG_IMAGE = `${SITE_URL}/gdLogo.png`;

const normalizePathname = (pathname = '/') => {
  if (!pathname || pathname === '/') {
    return '/';
  }

  return pathname.startsWith('/') ? pathname : `/${pathname}`;
};

const toAbsoluteUrl = (pathname = '/') => {
  const normalizedPath = normalizePathname(pathname);
  return normalizedPath === '/' ? SITE_URL : `${SITE_URL}${normalizedPath}`;
};

const createRouteMeta = ({ title, description, pathname, type = 'website' }) => ({
  title,
  description,
  pathname: normalizePathname(pathname),
  canonical: toAbsoluteUrl(pathname),
  type,
  image: DEFAULT_OG_IMAGE,
  siteName: SITE_NAME,
});

const routeMeta = {
  home: createRouteMeta({
    title: 'Goodly Development | Product, IT, and Web Services',
    description:
      'Goodly Development builds software products, provides managed IT services, and delivers high-performance web development for growing teams.',
    pathname: '/',
  }),
  itServices: createRouteMeta({
    title: 'Managed IT Services | Goodly Development',
    description:
      'Managed IT, endpoint support, cloud operations, network infrastructure, and backup/recovery services for reliable business operations.',
    pathname: '/it-services',
  }),
  webServices: createRouteMeta({
    title: 'Web Development Services | Goodly Development',
    description:
      'Custom websites, WordPress and Webflow builds, web app development, performance optimization, and ongoing maintenance.',
    pathname: '/web-services',
  }),
  support: createRouteMeta({
    title: 'Support Requests | Goodly Development',
    description:
      'Submit product support, change requests, and development tasks through the Goodly Development support portal.',
    pathname: '/support',
  }),
  privacy: createRouteMeta({
    title: 'Privacy Policy | OpenClaw by Goodly Development',
    description:
      'Privacy policy for the OpenClaw Notion integration operated by Goodly Development.',
    pathname: '/privacy',
  }),
  blogIndex: createRouteMeta({
    title: 'Goodly Development Blog',
    description:
      'Insights, implementation guides, and practical notes on web development, IT operations, and automation.',
    pathname: '/blog',
    type: 'blog',
  }),
};

const stripHtml = (value = '') => value.replace(/<[^>]*>/g, '').trim();

const getBlogPostMeta = (post) => {
  const slug = post?.slug || '';
  const pathname = slug ? `/blog/${slug}` : '/blog';
  const summary = stripHtml(post?.summary || '');
  const title = post?.title ? `${post.title} | Goodly Development Blog` : routeMeta.blogIndex.title;

  return createRouteMeta({
    title,
    description: summary || routeMeta.blogIndex.description,
    pathname,
    type: 'article',
  });
};

export {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  getBlogPostMeta,
  normalizePathname,
  routeMeta,
  toAbsoluteUrl,
};
