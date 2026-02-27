import React from 'react';
import styled from 'styled-components';

const AboutMeWrapper = styled.div`
  max-width: 1200px;
  margin: 80px auto 0;
  padding: 0;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 60px;
  margin-bottom: 72px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 32px;
  }
`;

const ImageOfMe = styled.img`
  width: 220px;
  height: 280px;
  object-fit: cover;
  border-radius: var(--radius-md);
  flex-shrink: 0;
  filter: grayscale(20%);

  @media (max-width: 780px) {
    width: 160px;
    height: 200px;
  }
`;

const HeaderContent = styled.div`
  flex: 1;
  padding-top: 4px;
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
  margin: 0 0 20px 0;
  font-weight: 600;
`;

const Subtitle = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--color-muted);
  margin: 0;
  max-width: 520px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid var(--border);
  border-left: 1px solid var(--border);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  padding: 40px 36px;
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
  font-size: 1.05rem;
  color: var(--color-text);
  margin: 0 0 12px 0;
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
    title: 'Smart Automations',
    description: 'Eliminate repetitive tasks and reduce errors with intelligent automation that frees your team to focus on what matters.',
  },
  {
    id: '02',
    title: 'Seamless Integrations',
    description: 'Connect your product stack into a unified ecosystem where data flows effortlessly and decisions happen faster.',
  },
  {
    id: '03',
    title: 'Custom Web Solutions',
    description: 'Custom-built websites and web applications that engage your audience and drive measurable business growth.',
  },
  {
    id: '04',
    title: 'Product Iteration & Maintenance',
    description: 'Ship new features, polish existing flows, and keep your codebase healthy with steady, senior engineering support.',
  },
];

const AboutMeSection = () => {
  return (
    <AboutMeWrapper id="about-me">
      <SectionHeader>
        <ImageOfMe src="bwprofile.png" alt="Jordan Allen" />
        <HeaderContent>
          <Eyebrow>What We Build</Eyebrow>
          <Title>Our Services</Title>
          <Subtitle>
            We partner with founders and operators to ship features, automate workflows, and keep products evolving.
            Every engagement is focused on building momentum for your product roadmap.
          </Subtitle>
        </HeaderContent>
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
    </AboutMeWrapper>
  );
};

export default AboutMeSection;
