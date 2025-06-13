// App.js
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import CTASection from './CTASection';
import AboutMeSection from './AboutMeSection';
import DemoSection from './DemoSection';
import TestimonialSection from './TestimonialSection';
import PricingTable from './PricingTable';
import GoodlyAbout from './GoodlyAbout';
import ITServicesSection from './ITServicesSection';
import TaskDefinition from './TaskDefinition';
import Footer from './Footer';
import BlogList from './BlogList';
import BlogPost from './BlogPost';
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
    <Router>
      <AppWrapper>
        <div style={{ maxWidth: "1455px", marginLeft: 'auto', marginRight: 'auto' }}>
          <Header />

          <Routes>
            <Route path="/" element={
              <>
                <CTASection />
                <GoodlyAbout />
                <ITServicesSection />
                <AboutMeSection />
                <DemoSection />
                <PricingTable />
                <TaskDefinition />
                <TestimonialSection />
              </>
            } />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:postId" element={<BlogPost />} />
          </Routes>

          <Footer />
        </div>
      </AppWrapper>
    </Router>
  );
};

export default App;
