import React from 'react';
import styled from 'styled-components';

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
  color: #193b17;
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
              <PointText>AUTOMATIONS</PointText>
              <SubPoint>Automation is like having a virtual assistant that can handle repetitive tasks for you, making your operations smoother and more efficient.</SubPoint>
            </Column>
            <Column>
              <PointText>INTEGRATIONS</PointText>
              <SubPoint>Integration is the process of making different software and applications work together harmoniously, sharing information and functionalities seamlessly.</SubPoint>
            </Column>
          </Row>
          <Row>
            <Column>
              <PointText>WEB DEVELOPMENT</PointText>
              <SubPoint>Web development is the process of building and maintaining a website, focusing on both the appearance and the functionality to provide a great user experience.</SubPoint>
            </Column>
            <Column>
              <PointText>SOFTWARE MANAGEMENT</PointText>
              <SubPoint>Software management involves overseeing and optimizing the software applications used in a business, ensuring they are secure, up-to-date, and functioning at their best.</SubPoint>
            </Column>
          </Row>
        </Column>
      </MainPointsWrapper>
    </AboutMeWrapper>
  );
};

export default AboutMeSection;
