// App.js
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Switch, and Route
import Header from './Header';
import CTASection from './CTASection';
import AboutMeSection from './AboutMeSection';
import TestimonialSection from './TestimonialSection';
import PricingTable from './PricingTable';
import Footer from './Footer';

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
     
            <TestimonialSection />
        
        
            <PricingTable />
         
        <Footer />
      </AppWrapper>
    
  );
};

export default App;
