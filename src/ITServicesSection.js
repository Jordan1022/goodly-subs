import React from 'react';
import styled from 'styled-components';

const ITServicesWrapper = styled.div`
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
    title: 'Managed IT Services',
    description: 'Complete infrastructure management — server maintenance, network monitoring, and system optimization to keep your business running 24/7.',
  },
  {
    id: '02',
    title: 'Endpoint & Device Management',
    description: 'Provisioning, MDM, updates, and lifecycle management for laptops, desktops, and mobile devices across your team.',
  },
  {
    id: '03',
    title: 'Cloud Migration & Management',
    description: 'Seamless cloud transitions and ongoing management across AWS, Azure, and Google Cloud for scalability and cost control.',
  },
  {
    id: '04',
    title: '24/7 Help Desk Support',
    description: 'Round-the-clock technical support with rapid response times and expert troubleshooting for every IT issue.',
  },
  {
    id: '05',
    title: 'Network Infrastructure',
    description: 'Design, implementation, and maintenance of robust network systems including WiFi, VPNs, and secure remote access.',
  },
  {
    id: '06',
    title: 'Data Backup & Recovery',
    description: 'Automated backup solutions and disaster recovery planning so your business data is always protected and recoverable.',
  },
];

const ITServicesSection = () => {
  return (
    <ITServicesWrapper id="it-services">
      <SectionHeader>
        <Eyebrow>IT Services</Eyebrow>
        <Title>Comprehensive IT Services</Title>
        <Subtitle>
          From infrastructure and network management to endpoint support, we provide complete IT solutions
          that keep your business reliable, efficient, and scalable.
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
    </ITServicesWrapper>
  );
};

export default ITServicesSection;
