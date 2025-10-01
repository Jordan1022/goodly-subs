import React from 'react';
import styled from 'styled-components';
import { FaServer, FaTools, FaCloud, FaHeadset, FaNetworkWired, FaDatabase } from 'react-icons/fa';

const ITServicesWrapper = styled.div`
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

const ITServicesSection = () => {
  return (
    <ITServicesWrapper id="it-services">
      <Header>
        <Title>Comprehensive IT Services</Title>
        <Subtitle>
          From infrastructure and network management to endpoint support, we provide complete IT solutions 
          that keep your business reliable, efficient, and scalable.
        </Subtitle>
      </Header>

      <ServicesGrid>
        <ServiceCard>
          <IconWrapper>
            <FaServer />
          </IconWrapper>
          <ServiceTitle>Managed IT Services</ServiceTitle>
          <ServiceDescription>
            Complete IT infrastructure management including server maintenance, network monitoring, 
            and system optimization to keep your business running 24/7.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <IconWrapper>
            <FaTools />
          </IconWrapper>
          <ServiceTitle>Endpoint & Device Management</ServiceTitle>
          <ServiceDescription>
            Provisioning, MDM, updates, and lifecycle management for laptops, desktops, and mobile devices 
            so your team stays productive with minimal downtime.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <IconWrapper>
            <FaCloud />
          </IconWrapper>
          <ServiceTitle>Cloud Migration & Management</ServiceTitle>
          <ServiceDescription>
            Seamless cloud transitions and ongoing management across AWS, Azure, and Google Cloud 
            platforms for scalability and cost optimization.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <IconWrapper>
            <FaHeadset />
          </IconWrapper>
          <ServiceTitle>24/7 Help Desk Support</ServiceTitle>
          <ServiceDescription>
            Round-the-clock technical support for your team with rapid response times 
            and expert troubleshooting for all IT issues.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <IconWrapper>
            <FaNetworkWired />
          </IconWrapper>
          <ServiceTitle>Network Infrastructure</ServiceTitle>
          <ServiceDescription>
            Design, implementation, and maintenance of robust network systems including 
            WiFi, VPNs, and secure remote access solutions.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <IconWrapper>
            <FaDatabase />
          </IconWrapper>
          <ServiceTitle>Data Backup & Recovery</ServiceTitle>
          <ServiceDescription>
            Automated backup solutions and disaster recovery planning to ensure your 
            business data is always protected and recoverable.
          </ServiceDescription>
        </ServiceCard>
      </ServicesGrid>
    </ITServicesWrapper>
  );
};

export default ITServicesSection;
