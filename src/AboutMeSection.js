// AboutMeSection.js
import React from 'react';
import styled from 'styled-components';

const AboutMeWrapper = styled.div`
  display: flex;
  border-radius: 8px;
  margin-bottom: 150px;
  background-color: #fff;
  
  /* Your About Me section styles here */
  /* Define styles for screens smaller than 768px */
  @media (max-width: 1100px) {
    flex-direction: column; /* Change to column layout on smaller screens */
    align-items: center; /* Center content on smaller screens */
    padding-bottom: 20px; /* Reduce padding on smaller screens */
    /* Add any other styles you want to change for smaller screens */
  }
`;

const ImageOfMe = styled.img`
  width: 350px;
  /* Your image styles here */
  border-radius: 8px;
  margin: 25px 10px 25px 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  /* Define styles for screens smaller than 768px */
  @media (max-width: 780px) {
    width: 100%; /* Adjust image size on smaller screens */
  }
`;

const MainPointsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto 20px;
  padding: 0 20px;
`;

const MainPoint = styled.div`
  margin-bottom: 20px;
  width: 50%;
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
    <AboutMeWrapper id="about-me">
      <ImageOfMe src="bwprofile.png" alt="You" />
      <MainPointsWrapper>
        <MainPoint>
          <Icon className="icon1" />
          <h2>What we offer:</h2>
          <PointText>
            <ul>
            <li>
            Automation & Integration
            </li>
            <li>
              Business workflows
              </li>
            <li>
            software management
            </li>
            <li>
            web development
            </li>
            <li>
            hosting and domain management
            </li>
            <li>
            technical problem solving
            </li>
            <li>
             IT support
            </li>
            </ul>
          </PointText>
        </MainPoint>
        <MainPoint>
          <Icon className="icon2" />
          <h2>What that looks like:</h2>
          <PointText>
            <ul>
              <li>
                Processes that work for you.
              </li>
            <li>
              Sales and marketing automation.
            </li>
            <li>
            Business Applications working seamlessly
            </li>
            <li>
            Business website and email managed.
            </li>
            </ul>
          </PointText>
        </MainPoint>
      </MainPointsWrapper>
    </AboutMeWrapper>
  );
};

export default AboutMeSection;
