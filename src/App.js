// App.js
import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import CTASection from './CTASection';
import AboutMeSection from './AboutMeSection';
import DemoSection from './DemoSection';
import TestimonialSection from './TestimonialSection';
import PricingTable from './PricingTable';
import Footer from './Footer';
import './App.css';

const AppWrapper = styled.div`
  /* Your app styles here */
  background-color: #000; /* Black background */
  color: #fff; /* White font color */
  padding: 0 50px; /* Margin on the left and right */
  font-family: 'Poppins', sans-serif; /* Apply Poppins font as the default font */
  @media (max-width: 1100px) { 
    padding: 0;
  }
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />

      <CTASection />

      {/* Define routes with Switch and Route */}

      <AboutMeSection />

      <PricingTable />

      <DemoSection />

      <TestimonialSection />

      <Footer />
    </AppWrapper>

  );
};

export default App;
