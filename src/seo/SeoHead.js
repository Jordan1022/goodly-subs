import React from 'react';
import { Helmet } from 'react-helmet-async';

const SeoHead = ({ meta, structuredData = [] }) => {
  if (!meta) {
    return null;
  }

  return (
    <Helmet prioritizeSeoTags>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content={meta.type || 'website'} />
      <meta property="og:url" content={meta.canonical} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      <link rel="canonical" href={meta.canonical} />
      {structuredData.map((entry, index) => (
        <script key={`jsonld-${index}`} type="application/ld+json">
          {JSON.stringify(entry)}
        </script>
      ))}
    </Helmet>
  );
};

export default SeoHead;
