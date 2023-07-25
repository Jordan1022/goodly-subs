// CTASection.js
import React from 'react';
import styled from 'styled-components';

const CTAWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  /* Your CTA section styles here */
  background-color: #000; /* Black background */
  background-image: url('path/to/background-pattern.png'); /* Replace with the path to your background pattern image */
  background-repeat: repeat; /* Repeat the background pattern */
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25); /* Box shadow for a 3D effect */
  height: 400px;
`;

const Heading2 = styled.h2`
  /* Your H2 text styles here */
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #fff; /* White font color */
`;

const Button1 = styled.button`
  /* Your button styles here */
  font-size: 1.5rem;
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #fff;
  color: #193b17; /* Dark green font color */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #1da90a; /* Bright green background on hover */
    color: #fff; /* White font color on hover */
  }
`;

const Button2 = styled.button`
/* Your button styles here */
font-size: 1.5rem;
padding: 10px 20px;
margin-right: 10px;
background-color: #fff;
color: #193b17; /* Dark green font color */
border: none;
border-radius: 5px;
cursor: pointer;
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
      <Heading2>Taking the stress out of Technology for Business</Heading2>
      <Button1>Services</Button1>
      <Button2>Subscriptions</Button2>
    </CTAWrapper>
  );
};

export default CTASection;
