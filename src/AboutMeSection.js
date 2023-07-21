// AboutMeSection.js
import React from 'react';
import styled from 'styled-components';

const AboutMeWrapper = styled.div`
  display: flex;
  /* Your About Me section styles here */
`;

const ImageOfMe = styled.img`
  width: 400px;
  /* Your image styles here */
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const MainPointsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
`;

const MainPoint = styled.div`
  margin-bottom: 20px;
`;

const Icon = styled.i`
  /* Your icon styles here */
  font-size: 24px;
  color: #193b17; /* Dark green color for the icon */
`;

const PointText = styled.p`
/* Your main point text styles here */
font-size: 1.2rem;
line-height: 1.8;
color: #777; /* Lighter text color for improved readability */
`;

const AboutMeSection = () => {
  return (
    <AboutMeWrapper>
      <ImageOfMe src="tolu.jpg" alt="You" />
      <MainPointsWrapper>
        <MainPoint>
          <Icon className="icon1" />
          <PointText>
            What we offer: Automation & Integration Packages - automated processes,
            creation of workflows, integration between apps (integrating one app with another),
            software management, web development, bug fixes, web maintenance,
            hosting and domain management, technical problem solving, and IT support
          </PointText>
        </MainPoint>
        <MainPoint>
          <Icon className="icon2" />
          <PointText>
            What that looks like: Social media and business website in sync.
            Website Apps for your biz working seamlessly.
            Glitches, bugs and website problems addressed.
            And getting any problems with your website, workflow, and specialized business software addressed in real-time.
          </PointText>
        </MainPoint>
      </MainPointsWrapper>
    </AboutMeWrapper>
  );
};

export default AboutMeSection;
