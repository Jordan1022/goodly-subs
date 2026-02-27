import React from 'react';
import { FaServer, FaTools, FaCloud, FaHeadset, FaNetworkWired, FaDatabase } from 'react-icons/fa';
import HeroSection from './components/HeroSection';
import ValueSection from './components/ValueSection';
import ServicesGrid from './components/ServicesGrid';
import DemoCarousel from './components/DemoCarousel';
import TestimonialCards from './components/TestimonialCards';

const heroData = {
  title: 'Reliable IT solutions for growing businesses',
  accentWord: 'Reliable',
  subtitle:
    'Comprehensive managed IT services, network infrastructure, and cybersecurity solutions. Keep your business running smoothly while we handle the technology.',
  primaryCTA: { label: 'View Services', scrollTo: 'it-services' },
  secondaryCTA: {
    label: 'Schedule Consultation',
    href: 'https://calendly.com/jordan-goodly/30min',
    external: true,
  },
};

const valueData = {
  title: 'Why Choose Our IT Services?',
  description:
    'We provide enterprise-grade IT solutions with small business care. Our managed services approach ensures your technology infrastructure supports your business growth, not hinders it.',
  highlightedTerms: ['enterprise-grade', 'small business care'],
  values: [
    {
      title: 'Proactive Monitoring',
      description:
        '24/7 system monitoring and maintenance prevents issues before they impact your business operations and productivity.',
    },
    {
      title: 'Scalable Solutions',
      description:
        'Our IT infrastructure grows with your business, from startup to SMBs, with seamless transitions and minimal disruption.',
    },
  ],
};

const servicesData = {
  title: 'Comprehensive IT Services',
  subtitle:
    'From infrastructure and network management to endpoint support, we provide complete IT solutions that keep your business reliable, efficient, and scalable.',
  columns: 3,
  services: [
    {
      icon: <FaServer />,
      title: 'Managed IT Services',
      description:
        'Complete IT infrastructure management including server maintenance, network monitoring, and system optimization to keep your business running 24/7.',
    },
    {
      icon: <FaTools />,
      title: 'Endpoint & Device Management',
      description:
        'Provisioning, MDM, updates, and lifecycle management for laptops, desktops, and mobile devices so your team stays productive with minimal downtime.',
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Migration & Management',
      description:
        'Seamless cloud transitions and ongoing management across AWS, Azure, and Google Cloud platforms for scalability and cost optimization.',
    },
    {
      icon: <FaHeadset />,
      title: '24/7 Help Desk Support',
      description:
        'Round-the-clock technical support for your team with rapid response times and expert troubleshooting for all IT issues.',
    },
    {
      icon: <FaNetworkWired />,
      title: 'Network Infrastructure',
      description:
        'Design, implementation, and maintenance of robust network systems including WiFi, VPNs, and secure remote access solutions.',
    },
    {
      icon: <FaDatabase />,
      title: 'Data Backup & Recovery',
      description:
        'Automated backup solutions and disaster recovery planning to ensure your business data is always protected and recoverable.',
    },
  ],
};

const demoTabs = [
  {
    label: 'Network Infrastructure',
    slides: [
      { src: 'userManagement.png', alt: 'Network Management Dashboard' },
      { src: 'gcp.png', alt: 'Network Monitoring Tools' },
      { src: 'aws.png', alt: 'Infrastructure Overview' },
    ],
    caption:
      'Robust network infrastructure design and monitoring systems for reliable business operations.',
  },
  {
    label: 'Security Solutions',
    slides: [
      { src: 'userManagement.png', alt: 'Security Dashboard' },
      { src: 'automationHub.png', alt: 'Security Automation' },
      { src: 'aws.png', alt: 'Compliance Monitoring' },
    ],
    caption:
      'Advanced cybersecurity solutions with threat monitoring, compliance tracking, and automated response systems.',
  },
  {
    label: 'Cloud Management',
    slides: [
      { src: 'gcp.png', alt: 'Google Cloud Platform' },
      { src: 'aws.png', alt: 'AWS Infrastructure' },
      { src: 'userManagement.png', alt: 'Cloud Management Tools' },
    ],
    caption:
      'Multi-cloud management platforms for AWS, Google Cloud, and Azure with cost optimization and scaling automation.',
  },
];

const testimonials = [
  {
    title: 'JL Wood Electric',
    text: '"Our partnership with Goodly Development transformed our IT infrastructure completely. What used to take our team weeks to implement, they accomplished in days. Their proactive monitoring caught three critical security vulnerabilities before they could impact our operations. The 24/7 support means we never worry about downtime affecting our clients."',
    image: 'cvr-img.jpg',
    alt: 'JL Wood Electric Team',
  },
  {
    title: 'HenCon Constructors',
    text: '"As a new company, we needed a reliable IT partner who could scale with us. Goodly Development provided the infrastructure and security we needed to grow without disruption. Their proactive monitoring and endpoint management keep our systems running smoothly, even as we expand."',
    image: 'cvr-img.jpg',
    alt: 'HenCon Constructors Team',
  },
];

const ITLanding = () => {
  return (
    <>
      <HeroSection {...heroData} />
      <ValueSection {...valueData} />
      <ServicesGrid id="it-services" {...servicesData} />
      <DemoCarousel tabs={demoTabs} />
      <TestimonialCards testimonials={testimonials} id="it-testimonials" />
    </>
  );
};

export default ITLanding;
