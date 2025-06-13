import React from 'react';
import styled from 'styled-components';
import { FaRobot, FaLink, FaLaptopCode, FaLock, FaShieldAlt, FaCloud, FaTools, FaHeadset } from 'react-icons/fa';

const AboutMeWrapper = styled.div`
  max-width: 1200px;
  margin: 80px auto;
  padding: 40px 20px;
  background: linear-gradient(to bottom, #fff, #f8f9fa);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  
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
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
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
  color: #2d3748;
  margin-bottom: 1rem;
  font-weight: 700;
  
  @media (max-width: 780px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: #4a5568;
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
  background: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  background: #F4C85F;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  
  svg {
    font-size: 24px;
    color: white;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  color: #2d3748;
  margin-bottom: 12px;
  font-weight: 600;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #4a5568;
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
            We transform complex technical challenges into elegant, efficient solutions. 
            From custom software development to comprehensive IT management, our full suite of services is designed to help your business thrive in the digital age.
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
            Connect your business tools into a unified ecosystem where data flows effortlessly, 
            enabling better decision-making and improved operational efficiency.
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
          <ServiceTitle>Technology Management</ServiceTitle>
          <ServiceDescription>
            Keep your digital infrastructure secure and efficient with our comprehensive 
            software management and maintenance services.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <IconWrapper>
            <FaShieldAlt />
          </IconWrapper>
          <ServiceTitle>Cybersecurity & Compliance</ServiceTitle>
          <ServiceDescription>
            Protect your business from digital threats with robust security solutions, regular assessments, 
            and compliance management that keeps your data safe and your reputation intact.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <IconWrapper>
            <FaCloud />
          </IconWrapper>
          <ServiceTitle>Cloud Solutions & Backup</ServiceTitle>
          <ServiceDescription>
            Scale your business with confidence through strategic cloud migration, automated backups, 
            and disaster recovery solutions that ensure your operations never skip a beat.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <IconWrapper>
            <FaTools />
          </IconWrapper>
          <ServiceTitle>IT Infrastructure Support</ServiceTitle>
          <ServiceDescription>
            Keep your systems running at peak performance with proactive monitoring, maintenance, 
            and optimization services that prevent problems before they impact your business.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <IconWrapper>
            <FaHeadset />
          </IconWrapper>
          <ServiceTitle>Strategic IT Consulting</ServiceTitle>
          <ServiceDescription>
            Navigate technology decisions with confidence through expert guidance on digital transformation, 
            vendor selection, and IT roadmaps tailored to your business goals.
          </ServiceDescription>
        </ServiceCard>
      </ServicesGrid>
    </AboutMeWrapper>
  );
};

export default AboutMeSection;
