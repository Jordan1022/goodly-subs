import { SITE_NAME, SITE_URL, routeMeta, toAbsoluteUrl } from './routeMeta';

const organizationData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  email: 'jordan@goodlydevelopment.com',
  logo: `${SITE_URL}/gdLogo.png`,
  sameAs: ['https://www.linkedin.com/in/jordan-allen-gd/'],
};

const websiteData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
};

const serviceListData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'Service',
      name: 'Software Product Development',
      provider: {
        '@type': 'Organization',
        name: SITE_NAME,
      },
      url: SITE_URL,
    },
  ],
};

const createBreadcrumbData = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

const buildStructuredData = ({ routeKey, post }) => {
  const shared = [organizationData, websiteData];

  if (routeKey === 'home') {
    return [...shared, serviceListData];
  }

  if (routeKey === 'support') {
    return [
      ...shared,
      createBreadcrumbData([
        { name: 'Home', url: SITE_URL },
        { name: 'Support', url: routeMeta.support.canonical },
      ]),
    ];
  }

  if (routeKey === 'blogIndex') {
    return [
      ...shared,
      createBreadcrumbData([
        { name: 'Home', url: SITE_URL },
        { name: 'Blog', url: routeMeta.blogIndex.canonical },
      ]),
    ];
  }

  if (routeKey === 'privacyPolicy') {
    return [
      ...shared,
      createBreadcrumbData([
        { name: 'Home', url: SITE_URL },
        { name: 'Privacy Policy', url: routeMeta.privacyPolicy.canonical },
      ]),
    ];
  }

  if (routeKey === 'termsConditions') {
    return [
      ...shared,
      createBreadcrumbData([
        { name: 'Home', url: SITE_URL },
        { name: 'Terms and Conditions', url: routeMeta.termsConditions.canonical },
      ]),
    ];
  }

  if (routeKey === 'smsConsent') {
    return [
      ...shared,
      createBreadcrumbData([
        { name: 'Home', url: SITE_URL },
        { name: 'SMS Consent', url: routeMeta.smsConsent.canonical },
      ]),
    ];
  }

  if (routeKey === 'blogPost' && post) {
    return [
      ...shared,
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title || 'Goodly Development Blog',
        description: post.summary || routeMeta.blogIndex.description,
        datePublished: post.publishedDate || undefined,
        dateModified: post.lastEditedTime || post.publishedDate || undefined,
        mainEntityOfPage: toAbsoluteUrl(`/blog/${post.slug}`),
        author: {
          '@type': 'Person',
          name: post.author || 'Jordan Allen',
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/gdLogo.png`,
          },
        },
      },
      createBreadcrumbData([
        { name: 'Home', url: SITE_URL },
        { name: 'Blog', url: routeMeta.blogIndex.canonical },
        { name: post.title || 'Post', url: toAbsoluteUrl(`/blog/${post.slug}`) },
      ]),
    ];
  }

  return shared;
};

export { buildStructuredData };
