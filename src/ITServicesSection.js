import React from 'react';
import styled from 'styled-components';
import { FaShieldAlt, FaCloud, FaTools, FaHeadset, FaClock, FaChartLine } from 'react-icons/fa';

const ITServicesWrapper = styled.div`
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  padding: 80px 20px;
  margin: 80px 0;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F4C85F' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    pointer-events: none;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: #F4C85F;
  margin-bottom: 1rem;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: #ffffff;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CleverTagline = styled.div`
  text-align: center;
  margin: 40px 0;
  padding: 20px;
  background: rgba(244, 200, 95, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(244, 200, 95, 0.2);
`;

const TaglineText = styled.h3`
  font-size: 1.5rem;
  color: #F4C85F;
  margin: 0;
  font-style: italic;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.08);
    border-color: #F4C85F;
    box-shadow: 0 20px 40px rgba(244, 200, 95, 0.1);
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: #F4C85F;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  
  svg {
    font-size: 28px;
    color: #1a1a1a;
  }
`;

const ServiceTitle = styled.h4`
  font-size: 1.3rem;
  color: #ffffff;
  margin-bottom: 15px;
  font-weight: 600;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #cccccc;
  margin: 0;
`;

const StatsSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 60px;
  padding: 40px;
  background: rgba(244, 200, 95, 0.05);
  border-radius: 16px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }
`;

const Stat = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #F4C85F;
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: #ffffff;
  opacity: 0.9;
`;

const ITServicesSection = () => {
  return (
    <ITServicesWrapper id="it-services">
      <ContentWrapper>
        <Header>
          <Title>Your IT. Simplified.</Title>
          <Subtitle>
            Stop wrestling with technology and start focusing on what matters most - growing your business. 
            Our comprehensive IT services keep your systems running smoothly, your data secure, and your team productive.
          </Subtitle>
        </Header>

        <CleverTagline>
          <TaglineText>
            "We don't just fix problems. We prevent them from happening in the first place."
          </TaglineText>
        </CleverTagline>

        <ServicesGrid>
          <ServiceCard>
            <IconWrapper>
              <FaShieldAlt />
            </IconWrapper>
            <ServiceTitle>Cybersecurity Shield</ServiceTitle>
            <ServiceDescription>
              Sleep soundly knowing your business is protected 24/7 with enterprise-grade security that scales with your growth.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard>
            <IconWrapper>
              <FaCloud />
            </IconWrapper>
            <ServiceTitle>Cloud Mastery</ServiceTitle>
            <ServiceDescription>
              Transform your operations with strategic cloud solutions that boost efficiency while cutting costs - because the future is in the cloud.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard>
            <IconWrapper>
              <FaTools />
            </IconWrapper>
            <ServiceTitle>Proactive Maintenance</ServiceTitle>
            <ServiceDescription>
              We fix issues before they become problems. Our monitoring catches potential failures early, keeping your business running seamlessly.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard>
            <IconWrapper>
              <FaHeadset />
            </IconWrapper>
            <ServiceTitle>Expert Support</ServiceTitle>
            <ServiceDescription>
              Get answers fast from real IT professionals who understand your business. No more waiting on hold or deciphering technical jargon.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard>
            <IconWrapper>
              <FaClock />
            </IconWrapper>
            <ServiceTitle>24/7 Monitoring</ServiceTitle>
            <ServiceDescription>
              Your systems never sleep, and neither does our vigilant monitoring. We're watching your infrastructure around the clock.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard>
            <IconWrapper>
              <FaChartLine />
            </IconWrapper>
            <ServiceTitle>Strategic Planning</ServiceTitle>
            <ServiceDescription>
              Don't just react to technology needs - anticipate them. We help you plan IT investments that fuel long-term growth.
            </ServiceDescription>
          </ServiceCard>
        </ServicesGrid>

        <StatsSection>
          <Stat>
            <StatNumber>99.9%</StatNumber>
            <StatLabel>Uptime Guarantee</StatLabel>
          </Stat>
          <Stat>
            <StatNumber>&lt;2min</StatNumber>
            <StatLabel>Average Response Time</StatLabel>
          </Stat>
          <Stat>
            <StatNumber>24/7</StatNumber>
            <StatLabel>Monitoring & Support</StatLabel>
          </Stat>
        </StatsSection>
      </ContentWrapper>
    </ITServicesWrapper>
  );
};

export default ITServicesSection;