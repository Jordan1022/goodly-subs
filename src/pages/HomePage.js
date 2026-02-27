import React from 'react';
import { FaRobot, FaLink, FaLaptopCode, FaLock } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';
import ValueSection from '../components/ValueSection';
import ServicesGrid from '../components/ServicesGrid';
import DemoCarousel from '../components/DemoCarousel';
import TestimonialCards from '../components/TestimonialCards';

const heroData = {
  title: 'Building exceptional software products',
  accentWord: 'exceptional',
  subtitle:
    'Modern product development, automations, and integrations for teams who need to ship fast. Thoughtfully executed, elegantly delivered.',
  primaryCTA: { label: 'See plans', scrollTo: 'pricing-table' },
  secondaryCTA: {
    label: 'Book a call',
    href: 'https://calendly.com/jordan-goodly/30min',
    external: true,
  },
};

const valueData = {
  title: 'Why Goodly?',
  description:
    'We chose our name from an old English word meaning of exceptional quality and abundance. It captures how we work with product teams: delivering abundant value through exceptional quality builds and continuous improvement.',
  highlightedTerms: ['of exceptional quality', 'abundance'],
  values: [
    {
      title: 'Quality First',
      description:
        'We believe in doing things right the first time, shipping code that is reliable, maintainable, and ready to scale with your product.',
    },
    {
      title: 'Efficiency Driven',
      description:
        'Our experienced team turns complex product requirements into streamlined releases that ship faster and with less stress.',
    },
  ],
};

const servicesData = {
  title: 'Our Services',
  subtitle:
    'We partner with founders and operators to ship features, automate workflows, and keep products evolving. Every engagement is focused on building momentum for your product roadmap.',
  headerImage: 'bwprofile.png',
  headerImageAlt: 'Jordan Allen',
  services: [
    {
      icon: <FaRobot />,
      title: 'Smart Automations',
      description:
        'Transform your workflow with intelligent automation solutions that eliminate repetitive tasks, reduce errors, and free up your team to focus on strategic growth.',
    },
    {
      icon: <FaLink />,
      title: 'Seamless Integrations',
      description:
        'Connect your product stack into a unified ecosystem where data flows effortlessly, enabling richer experiences and faster decision-making.',
    },
    {
      icon: <FaLaptopCode />,
      title: 'Custom Web Solutions',
      description:
        'Create compelling digital experiences with custom-built websites and web applications that engage your audience and drive business growth.',
    },
    {
      icon: <FaLock />,
      title: 'Product Iteration & Maintenance',
      description:
        'Ship new features, polish existing flows, and keep your codebase healthy with steady, senior engineering support.',
    },
  ],
};

const demoTabs = [
  {
    label: 'Product Development',
    slides: [
      { src: 'weGive1.png', alt: 'Financial Processing Platform' },
      { src: 'weGive2.png', alt: 'Financial Platform Features' },
      { src: 'mn81.png', alt: 'Music Streaming Service' },
    ],
    caption:
      'Modern product experiences across finance, media, and membership platforms.',
  },
  {
    label: 'Automations',
    slides: [
      { src: 'automationHub.png', alt: 'Automation Hub' },
      { src: 'auto4.png', alt: 'Automation Example' },
      { src: 'auto3.png', alt: 'Automation Workflow' },
    ],
    caption:
      'Automations for lead generation, customer onboarding, and revenue ops.',
  },
  {
    label: 'Admin Tools & Dashboards',
    slides: [
      { src: 'gcp.png', alt: 'Google Cloud Platform' },
      { src: 'userManagement.png', alt: 'User Management' },
      { src: 'aws.png', alt: 'AWS Infrastructure' },
    ],
    caption:
      'Internal dashboards, permission controls, and developer tooling for growing products.',
  },
];

const testimonials = [
  {
    title: 'J.A. Studio',
    text: '"Why didn\'t I hire Goodly Development sooner? I should have, because it would have saved me needless frustration and stress. Being a small business owner I can\'t do it all, but technology is something that causes me exponential amounts of irritation. Jordan and his team were helpful, knowledgeable, professional and diffused my stress with how efficiently they worked. A website issue that caused me 3+ days of work was fixed in less than 2 hours. Save yourself the trouble and hire Goodly today!"',
    image: 'christina.jpg',
    alt: 'J.A. Studio Testimonial',
  },
  {
    title: 'The Nelson Group',
    text: '"Goodly Development has been a lifesaver!! Jordan and the team are so responsive, knowledgeable, kind and knew what I needed to systematize our processes and make our business work more efficiently. Even when I didn\'t know how to articulate what we needed! We cannot recommend them highly enough!"',
    image: 'Jenn.jpg',
    alt: 'The Nelson Group Testimonial',
  },
];

const HomePage = () => {
  return (
    <>
      <HeroSection {...heroData} />
      <ValueSection {...valueData} />
      <ServicesGrid id="about-me" {...servicesData} />
      <DemoCarousel tabs={demoTabs} />
      <TestimonialCards testimonials={testimonials} id="testimony" />
    </>
  );
};

export default HomePage;
