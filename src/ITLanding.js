// ITLanding.js
import React from 'react';
import styled from 'styled-components';
import ITCTASection from './ITCTASection';
import ITAboutSection from './ITAboutSection';
import ITServicesSection from './ITServicesSection';
import ITDemoSection from './ITDemoSection';
import ITTestimonialSection from './ITTestimonialSection';

const ITLandingWrapper = styled.div`
  background-color: transparent;
  color: var(--color-text);
`;

const ITLanding = () => {
  return (
    <ITLandingWrapper>
      <ITCTASection />
      <ITAboutSection />
      <ITServicesSection />
      <ITDemoSection />
      <ITTestimonialSection />
    </ITLandingWrapper>
  );
};

export default ITLanding;
