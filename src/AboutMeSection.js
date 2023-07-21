// AboutMeSection.js
import React from 'react';
import styled from 'styled-components';

const AboutMeWrapper = styled.div`
  /* Your About Me section styles here */
`;

const ImageOfMe = styled.img`
  /* Your image styles here */
`;

const MainPointsWrapper = styled.div`
  /* Your main points section styles here */
`;

const MainPoint = styled.div`
  /* Your main point styles here */
`;

const Icon = styled.i`
  /* Your icon styles here */
`;

const AboutMeSection = () => {
  return (
    <AboutMeWrapper>
      <ImageOfMe src="path/to/your-image.jpg" alt="You" />
      <MainPointsWrapper>
        <MainPoint>
          <Icon className="icon1" />
          <p>Main Point 1 Text</p>
        </MainPoint>
        <MainPoint>
          <Icon className="icon2" />
          <p>Main Point 2 Text</p>
        </MainPoint>
      </MainPointsWrapper>
    </AboutMeWrapper>
  );
};

export default AboutMeSection;
