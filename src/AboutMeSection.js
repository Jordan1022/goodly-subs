import React from 'react';
import styled from 'styled-components';
import { FaRobot, FaLink, FaLaptopCode, FaLock } from 'react-icons/fa';

const AboutMeWrapper = styled.div`
  max-width: 1200px;
  margin: 80px auto;
  padding: 40px 20px;
  background: linear-gradient(to bottom, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
  border: 1px solid var(--border);
  border-radius: 20px;
  box-shadow: var(--shadow-1);
  
  @media (max-width: 1100px) {
    margin: 60px 20px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 60px;
  
  @media (max-width: 1100px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageOfMe = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
  
  @media (max-width: 780px) {
    width: 250px;
    height: 250px;
  }
`;

const HeaderContent = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: var(--color-text);
  margin-bottom: 1rem;
  font-weight: 700;
  
  @media (max-width: 780px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--color-muted);
  margin-bottom: 1.5rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: var(--card-bg);
  padding: 30px;
  border-radius: 16px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-2);
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(244, 200, 95, 0.15);
  border: 1px solid rgba(244, 200, 95, 0.4);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  
  svg {
    font-size: 24px;
    color: var(--color-gold);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  color: var(--color-text);
  margin-bottom: 12px;
  font-weight: 600;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-muted);
  margin: 0;
`;

const AboutMeSection = () => {
  return (
    <AboutMeWrapper id="about-me">
      <Header>
        <ImageOfMe src="bwprofile.png" alt="Jordan Allen" />
        <HeaderContent>
          <Title>Our Services</Title>
          <Subtitle>
            We partner with founders and operators to ship features, automate workflows, and keep products evolving. 
            Every engagement is focused on building momentum for your product roadmap.
          </Subtitle>
        </HeaderContent>
      </Header>

      <ServicesGrid>
        <ServiceCard>
          <IconWrapper>
            <FaRobot />
          </IconWrapper>
          <ServiceTitle>Smart Automations</ServiceTitle>
          <ServiceDescription>
            Transform your workflow with intelligent automation solutions that eliminate repetitive tasks, 
            reduce errors, and free up your team to focus on strategic growth.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <IconWrapper>
            <FaLink />
          </IconWrapper>
          <ServiceTitle>Seamless Integrations</ServiceTitle>
          <ServiceDescription>
            Connect your product stack into a unified ecosystem where data flows effortlessly, 
            enabling richer experiences and faster decision-making.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <IconWrapper>
            <FaLaptopCode />
          </IconWrapper>
          <ServiceTitle>Custom Web Solutions</ServiceTitle>
          <ServiceDescription>
            Create compelling digital experiences with custom-built websites and web applications 
            that engage your audience and drive business growth.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <IconWrapper>
            <FaLock />
          </IconWrapper>
          <ServiceTitle>Product Iteration & Maintenance</ServiceTitle>
          <ServiceDescription>
            Ship new features, polish existing flows, and keep your codebase healthy with 
            steady, senior engineering support.
          </ServiceDescription>
        </ServiceCard>
      </ServicesGrid>
    </AboutMeWrapper>
  );
};

export default AboutMeSection;
