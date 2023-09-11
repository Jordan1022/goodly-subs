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
  color: #777;
  margin: 0;
`;

const SubPoint = styled.p`
  font-size: 1rem;
  color: #999;
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
              <PointText>Marketing & Workflow Automations</PointText>
              <SubPoint>Processes that work for you.</SubPoint>
            </Column>
            <Column>
              <PointText>Integration between Apps</PointText>
              <SubPoint>Seamless data flow.</SubPoint>
            </Column>
          </Row>
          <Row>
            <Column style={{ marginRight: '10em' }}>
              <PointText>CRM Building</PointText>
              <SubPoint>Sales and marketing automation.</SubPoint>
            </Column>
            <Column>
              <PointText>Website Development</PointText>
              <SubPoint>Business Applications working seamlessly</SubPoint>
            </Column>
          </Row>
          <Row>
            <Column style={{ marginRight: '10em' }}>
              <PointText>Email Marketing</PointText>
              <SubPoint>Email marketing automation.</SubPoint>
            </Column>
            <Column>
              <PointText>Software Engineering</PointText>
              <SubPoint>Business website and email managed.</SubPoint>
            </Column>
          </Row>
          <Row>
            <Column style={{ marginRight: '10em' }}>
              <PointText>Tech Support</PointText>
              <SubPoint>24/7 dedicated assistance.</SubPoint>
            </Column>
            <Column>
              <PointText>IT troubleshooting</PointText>
              <SubPoint>Solving tech issues efficiently.</SubPoint>
            </Column>
          </Row>
        </Column>
      </MainPointsWrapper>
    </AboutMeWrapper>
  );
};

export default AboutMeSection;
