import React from 'react';
import styled from 'styled-components';

const WebServicesWrapper = styled.div`
  margin: 80px 0;
`;

const SectionHeader = styled.div`
  margin-bottom: 52px;
`;

const Eyebrow = styled.p`
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin: 0 0 16px 0;
  opacity: 0.85;
`;

const Title = styled.h2`
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  color: var(--color-text);
  margin: 0 0 16px 0;
  font-weight: 600;
`;

const Subtitle = styled.p`
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--color-muted);
  max-width: 560px;
  margin: 0;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid var(--border);
  border-left: 1px solid var(--border);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  padding: 40px 32px;
  border-right: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.02);
  }
`;

const ServiceNumber = styled.span`
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: var(--color-gold);
  opacity: 0.7;
  display: block;
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h3`
  font-size: 1rem;
  color: var(--color-text);
  margin: 0 0 10px 0;
  font-weight: 600;
`;

const ServiceDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--color-muted);
  margin: 0;
`;

const services = [
  {
    id: '01',
    title: 'Custom Website Design',
    description: 'Beautiful, responsive websites tailored to your brand with modern design principles and optimized user experience across all devices.',
  },
  {
    id: '02',
    title: 'WordPress Development',
    description: 'Custom themes, plugins, and complete site builds with advanced functionality and seamless content management.',
  },
  {
    id: '03',
    title: 'Webflow Development',
    description: 'Professional Webflow sites with custom interactions, CMS integration, and pixel-perfect designs that are easy to maintain.',
  },
  {
    id: '04',
    title: 'Performance Optimization',
    description: 'Speed optimization, caching strategies, and CDN implementation via Cloudflare for consistently fast load times.',
  },
  {
    id: '05',
    title: 'Security & Maintenance',
    description: 'Ongoing security monitoring, regular updates, and backups to keep your website protected and running smoothly.',
  },
  {
    id: '06',
    title: 'Web Application Development',
    description: 'Custom web applications with modern frameworks, database integration, and scalable architecture for complex requirements.',
  },
];

const WebServicesSection = () => {
  return (
    <WebServicesWrapper id="web-services">
      <SectionHeader>
        <Eyebrow>Web Services</Eyebrow>
        <Title>Complete Web Solutions</Title>
        <Subtitle>
          From custom websites to platform management, we provide end-to-end web services
          using the latest technologies and best practices for optimal performance.
        </Subtitle>
      </SectionHeader>

      <ServicesGrid>
        {services.map(s => (
          <ServiceCard key={s.id}>
            <ServiceNumber>{s.id}</ServiceNumber>
            <ServiceTitle>{s.title}</ServiceTitle>
            <ServiceDescription>{s.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </WebServicesWrapper>
  );
};

export default WebServicesSection;
