// CTASection.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const CTAWrapper = styled.div`
 
  /* Your CTA section styles here */
  background-color: #000; /* Dark Green background */
  background-image: url('path/to/background-pattern.png'); /* Replace with the path to your background pattern image */
  background-repeat: repeat; /* Repeat the background pattern */
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25); /* Box shadow for a 3D effect */
  height: 400px;
  padding: 80px 40px;
`;

const Heading2 = styled.h2`
  /* Your H2 text styles here */
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: 400;
  color: #F4C85F; /* White font color */
`;

const Heading3 = styled.h3`
  /* Your H3 text styles here */
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: 300;
  color: #fff;

`;

const Button1 = styled(Link)`
  /* Your button styles here */
  font-size: 1.5rem;
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #F4C85F;
  color: #193b17; /* Dark green font color */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  font-family: Knoxville;
  &:hover {
    background-color: #1da90a; /* Bright green background on hover */
    color: #fff; /* White font color on hover */
  }
`;

const Button2 = styled.a`
/* Your button styles here */
font-size: 1.5rem;
padding: 10px 20px;
margin-right: 10px;
background-color: #F4C85F;
color: #193b17; /* Dark green font color */
border: none;
border-radius: 5px;
font-family: Knoxville;
cursor: pointer;
text-decoration: none;
transition: background-color 0.3s ease-in-out;

&:hover {
  background-color: #1da90a; /* Bright green background on hover */
  color: #fff; /* White font color on hover */
}
@media (max-width: 420px) {
  margin-top: 10px;
}
`;


const CTASection = () => {
  return (
    <CTAWrapper>
      <Heading2>Stress Free Technology for Business</Heading2>
      <Heading3>
        Wave goodbye to tech headaches, and hello to streamlined operations.
      </Heading3>
      <Button1
        to="pricing-table"
        smooth={true}
        duration={500}
        spy={true}
        exact='true'
        offset={-80}
      >
        SEE PLANS
      </Button1>

      <Button2
        href="https://calendly.com/jordan-goodly/30min"
        target="_blank"
        rel="noopener noreferrer"
        smooth={true}
        duration={500}
        spy={true}
        exact='true'
        offset={-80}
      >
        BOOK A CALL
      </Button2>

    </CTAWrapper>
  );
};


export default CTASection;
