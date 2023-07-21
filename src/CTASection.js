// CTASection.js
import React from 'react';
import styled from 'styled-components';

const CTAWrapper = styled.div`
padding: 20px 0;
  /* Your CTA section styles here */
`;

const Heading2 = styled.h2`
  /* Your H2 text styles here */
`;

const Button = styled.button`
  /* Your button styles here */
`;

const CTASection = () => {
  return (
    <CTAWrapper>
      <Heading2>Taking the Stress of out Technology</Heading2>
      <Heading2>for Business</Heading2>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
    </CTAWrapper>
  );
};

export default CTASection;
