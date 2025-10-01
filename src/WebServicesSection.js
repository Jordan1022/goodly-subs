import React from 'react';
import styled from 'styled-components';
import { FaWordpress, FaPalette, FaRocket, FaCog, FaShieldAlt, FaMobile } from 'react-icons/fa';

const WebServicesWrapper = styled.div`
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
  text-align: center;
  margin-bottom: 60px;
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
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

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
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-2);
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(244, 200, 95, 0.15);
  border: 1px solid rgba(244, 200, 95, 0.4);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  
  svg {
    font-size: 28px;
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

const WebServicesSection = () => {
  return (
    <WebServicesWrapper id="web-services">
      <Header>
        <Title>Complete Web Solutions</Title>
        <Subtitle>
          From custom websites to platform management, we provide end-to-end web services 
          using the latest technologies and best practices for optimal performance.
        </Subtitle>
      </Header>

      <ServicesGrid>
        <ServiceCard>
          <IconWrapper>
            <FaPalette />
          </IconWrapper>
          <ServiceTitle>Custom Website Design</ServiceTitle>
          <ServiceDescription>
            Beautiful, responsive websites tailored to your brand with modern design principles 
            and optimized user experience across all devices.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <IconWrapper>
            <FaWordpress />
          </IconWrapper>
          <ServiceTitle>WordPress Development</ServiceTitle>
          <ServiceDescription>
            Custom WordPress themes, plugins, and complete site development with 
            advanced functionality and seamless content management.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <IconWrapper>
            <FaCog />
          </IconWrapper>
          <ServiceTitle>Webflow Development</ServiceTitle>
          <ServiceDescription>
            Professional Webflow sites with custom interactions, CMS integration, 
            and pixel-perfect designs that are easy to maintain.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <IconWrapper>
            <FaRocket />
          </IconWrapper>
          <ServiceTitle>Performance Optimization</ServiceTitle>
          <ServiceDescription>
            Speed optimization, caching strategies, and CDN implementation through 
            Cloudflare and other tools for lightning-fast load times.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <IconWrapper>
            <FaShieldAlt />
          </IconWrapper>
          <ServiceTitle>Security & Maintenance</ServiceTitle>
          <ServiceDescription>
            Comprehensive security monitoring, regular updates, backups, and 
            ongoing maintenance to keep your website secure and running smoothly.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <IconWrapper>
            <FaMobile />
          </IconWrapper>
          <ServiceTitle>Web Application Development</ServiceTitle>
          <ServiceDescription>
            Custom web applications with modern frameworks, database integration, 
            and scalable architecture for complex business requirements.
          </ServiceDescription>
        </ServiceCard>
      </ServicesGrid>
    </WebServicesWrapper>
  );
};

export default WebServicesSection;
