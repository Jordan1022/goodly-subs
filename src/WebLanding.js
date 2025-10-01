// WebLanding.js
import React from 'react';
import styled from 'styled-components';
import WebCTASection from './WebCTASection';
import WebAboutSection from './WebAboutSection';
import WebServicesSection from './WebServicesSection';
import WebDemoSection from './WebDemoSection';
import WebTestimonialSection from './WebTestimonialSection';

const WebLandingWrapper = styled.div`
  background-color: transparent;
  color: var(--color-text);
`;

const WebLanding = () => {
  return (
    <WebLandingWrapper>
      <WebCTASection />
      <WebAboutSection />
      <WebServicesSection />
      <WebDemoSection />
      {/* <WebTestimonialSection /> */}
    </WebLandingWrapper>
  );
};

export default WebLanding;
