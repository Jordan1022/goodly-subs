import React from 'react';
import { FaWordpress, FaPalette, FaRocket, FaCog, FaShieldAlt, FaMobile } from 'react-icons/fa';
import HeroSection from './components/HeroSection';
import ValueSection from './components/ValueSection';
import ServicesGrid from './components/ServicesGrid';
import DemoCarousel from './components/DemoCarousel';

const heroData = {
  title: 'Professional web solutions that perform',
  accentWord: 'Professional',
  subtitle:
    'Custom websites, web applications, and comprehensive web service management. From Webflow and WordPress to Cloudflare optimization - we handle it all.',
  primaryCTA: { label: 'View Web Services', scrollTo: 'web-services' },
  secondaryCTA: {
    label: 'Get Web Quote',
    href: 'https://calendly.com/jordan-goodly/30min',
    external: true,
  },
};

const valueData = {
  title: 'Why Choose Our Web Services?',
  description:
    'We create high-performance web experiences with modern tools. From custom development to platform management, we ensure your web presence drives results and grows with your business.',
  highlightedTerms: ['high-performance', 'modern tools'],
  values: [
    {
      title: 'Performance Optimized',
      description:
        'Lightning-fast websites with advanced caching, CDN optimization, and modern web technologies for superior user experience.',
    },
    {
      title: 'Platform Expertise',
      description:
        'Deep knowledge across WordPress, Webflow, Cloudflare, and custom solutions to choose the right tool for your needs.',
    },
  ],
};

const servicesData = {
  title: 'Complete Web Solutions',
  subtitle:
    'From custom websites to platform management, we provide end-to-end web services using the latest technologies and best practices for optimal performance.',
  columns: 3,
  services: [
    {
      icon: <FaPalette />,
      title: 'Custom Website Design',
      description:
        'Beautiful, responsive websites tailored to your brand with modern design principles and optimized user experience across all devices.',
    },
    {
      icon: <FaWordpress />,
      title: 'WordPress Development',
      description:
        'Custom WordPress themes, plugins, and complete site development with advanced functionality and seamless content management.',
    },
    {
      icon: <FaCog />,
      title: 'Webflow Development',
      description:
        'Professional Webflow sites with custom interactions, CMS integration, and pixel-perfect designs that are easy to maintain.',
    },
    {
      icon: <FaRocket />,
      title: 'Performance Optimization',
      description:
        'Speed optimization, caching strategies, and CDN implementation through Cloudflare and other tools for lightning-fast load times.',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Security & Maintenance',
      description:
        'Comprehensive security monitoring, regular updates, backups, and ongoing maintenance to keep your website secure and running smoothly.',
    },
    {
      icon: <FaMobile />,
      title: 'Web Application Development',
      description:
        'Custom web applications with modern frameworks, database integration, and scalable architecture for complex business requirements.',
    },
  ],
};

const demoTabs = [
  {
    label: 'Custom Websites',
    slides: [
      { src: 'weGive1.png', alt: 'Custom Website Design' },
      { src: 'weGive2.png', alt: 'Responsive Web Design' },
      { src: 'mn81.png', alt: 'Modern Website Interface' },
    ],
    caption:
      'Beautiful, responsive websites built with modern design principles and optimized for performance.',
  },
  {
    label: 'Platform Management',
    slides: [
      { src: 'userManagement.png', alt: 'WordPress Management' },
      { src: 'automationHub.png', alt: 'Webflow Development' },
      { src: 'gcp.png', alt: 'Platform Integration' },
    ],
    caption:
      'Expert management of WordPress, Webflow, and other platforms with custom functionality and optimization.',
  },
  {
    label: 'Web Applications',
    slides: [
      { src: 'mn82.png', alt: 'Web Application Dashboard' },
      { src: 'userManagement.png', alt: 'Custom Web App' },
      { src: 'automationHub.png', alt: 'Interactive Web Tools' },
    ],
    caption:
      'Custom web applications with advanced functionality, database integration, and scalable architecture.',
  },
];

const WebLanding = () => {
  return (
    <>
      <HeroSection {...heroData} />
      <ValueSection {...valueData} />
      <ServicesGrid id="web-services" {...servicesData} />
      <DemoCarousel tabs={demoTabs} />
    </>
  );
};

export default WebLanding;
