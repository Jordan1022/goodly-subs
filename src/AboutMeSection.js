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
  border-radius: 8px;
  margin: 25px 10px 25px 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 780px) {
    width: 100%;
    height: 100%;
  }
`;

const MainPointsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto 20px;
  padding: 0 20px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;  /* You can adjust this value for better spacing */
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Icon = styled.i`
  font-size: 24px;
  color: #193b17;
  margin-right: 10px;
`;

const PointText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #F4C85F;
  margin: 0;
  font-family: Knoxville;
`;

const SubPoint = styled.p`
  font-size: 1rem;
  color: #22342E;
  margin: 0;
`;

const AboutMeSection = () => {
  return (
    <AboutMeWrapper id="about-me">
      <ImageOfMe src="bwprofile.png" alt="You" />
      <MainPointsWrapper>
        <Icon className="icon1" />

        <Column>
          <Row>
            <Column style={{ marginRight: '10em' }}>
              <PointText>AUTOMATIONS</PointText>
              <SubPoint>Automation is like having a virtual assistant that can handle repetitive tasks for you, making your operations smoother and more efficient.</SubPoint>
            </Column>
            <Column>
              <PointText>INTEGRATIONS</PointText>
              <SubPoint>Integration is the process of making different software and applications work together harmoniously, sharing information and functionalities seamlessly.</SubPoint>
            </Column>
          </Row>
          <Row>
            <Column style={{ marginRight: '10em' }}>
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
