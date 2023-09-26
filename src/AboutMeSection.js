import React from 'react';
import styled from 'styled-components';
import { FaRobot, FaLink, FaLaptopCode, FaLock } from 'react-icons/fa';

const AboutMeWrapper = styled.div`
  display: flex;
  border-radius: 8px;
  margin-bottom: 150px;
  background-color: #fff;
  
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    margin-top: 100px;
  }
  @media (max-width: 780px) {
    margin-top: 150px;
  }
`;

const ImageOfMe = styled.img`
  width: 350px;
  max-height: 350px; /* Limit the height to prevent squishing */
  object-fit: cover; /* Adjusts the image to cover the area without distortion */
  border-radius: 8px;
  margin: 25px 10px 25px 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  margin: auto auto auto 25px;
  
  @media (max-width: 1100px) {
    width: 300px;
  }

  @media (max-width: 780px) {
    width: 250px;
    margin-top: 50px;
  }
`;

const MainPointsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 0 20px;

  @media (min-width: 781px) and (max-width: 1099px) {
    flex-direction: column;
  }

  @media (min-width: 1100px) {
    flex-direction: row;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
 
  margin: 0 auto;

  @media (min-width: 1100px) {
    
    max-width: none;
    margin: 0;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 20px; /* Add a gap property to maintain some space between columns */

  @media (min-width: 1100px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;




const Icon = styled.i`
  font-size: 24px;
  color: #F4C85F;
  margin-right: 10px;
`;

const PointText = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: #F4C85F;
  margin: 0;
  font-family: Knoxville;

  @media (min-width: 781px) {
    font-size: 1.2rem;
  }
`;

const SubPoint = styled.p`
  font-size: 0.875rem;
  color: #22342E;
  margin: 0;

  @media (min-width: 781px) {
    font-size: 1rem;
  }
`;


const AboutMeSection = () => {
  return (
    <AboutMeWrapper id="about-me">
      <ImageOfMe src="bwprofile.png" alt="You" />
      <MainPointsWrapper>
        <Icon className="icon1" />

        <Column>
          <Row>
            <Column >
              <Icon>
                <FaRobot />
              </Icon>
              <PointText>AUTOMATIONS</PointText>
              <SubPoint>Imagine a virtual helper taking care of repetitive tasks, saving you hours each day. That's what our automation service offers - giving you more time to focus on growing your business.</SubPoint>
            </Column>
            <Column>
              <Icon>
                <FaLink />
              </Icon>
              <PointText>INTEGRATIONS</PointText>
              <SubPoint>Our integrations service ensures all your different software and apps talk to each other seamlessly, sharing information automatically, so you don’t have to juggle between multiple platforms.</SubPoint>
            </Column>
          </Row>
          <Row>
            <Column>
              <Icon>
                <FaLaptopCode />
              </Icon>
              <PointText>WEB DEVELOPMENT</PointText>
              <SubPoint>A website that not only looks great but works flawlessly. We build websites that offer excellent user experiences, keeping your customers engaged and happy.</SubPoint>
            </Column>
            <Column>
              <Icon>
                <FaLock />
              </Icon>
              <PointText>SOFTWARE MANAGEMENT</PointText>
              <SubPoint>We keep an eye on all the software your business uses, making sure everything is secure, up-to-date, and working smoothly, so you can work worry-free.</SubPoint>
            </Column>
          </Row>
        </Column>
      </MainPointsWrapper>
    </AboutMeWrapper>
  );
};

export default AboutMeSection;
