import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm'; // Replace with the actual path to your ContactForm component
import PricingTable from './PricingTable';

const AppWrapper = styled.div`
  background-color: #f0f4e6; /* Neutral Green */
  color: #6b705c; /* Neutral Gold */
  padding: 20px;
  font-family: Arial, sans-serif;
  min-height: 100vh;
`;

const LogoImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #000000;
  font-family: Arial, sans-serif;
`;

const ContactFormWrapper = styled.div`
  margin-top: 50px;
  background-color: #e4e1c7; /* Light Neutral Gold */
  padding: 20px;
  border-radius: 8px;
`;

const App = () => {
  return (
    <AppWrapper>
      <LogoImage src="logo.svg" alt="Logo" />
      <Heading >Automation and Integration Services</Heading>

      {/* Add your components and content here */}
      <PricingTable />
      <ContactFormWrapper>
        <ContactForm />
      </ContactFormWrapper>
    </AppWrapper>
  );
};

export default App;
