// App.js
import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import CTASection from './CTASection';
import AboutMeSection from './AboutMeSection';
import DemoSection from './DemoSection';
import TestimonialSection from './TestimonialSection';
import PricingTable from './PricingTable';
import GoodlyAbout from './GoodlyAbout';
import TaskDefinition from './TaskDefinition';
import Footer from './Footer';
import BlogList from './BlogList';
import BlogPost from './BlogPost';
import './App.css';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-ink: #0b0d14;
    --color-ink-2: #0f121a;
    --color-gold: #F4C85F;
    --color-text: #f5f7fa;
    --color-muted: #a6adbb;
    --card-bg: rgba(255, 255, 255, 0.06);
    --border: rgba(255, 255, 255, 0.08);
    --shadow-1: 0 10px 30px rgba(0, 0, 0, 0.25);
    --shadow-2: 0 20px 50px rgba(0, 0, 0, 0.35);
    --radius-lg: 18px;
    --radius-md: 12px;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    background: radial-gradient(1200px 600px at 10% -10%, #162032 0%, transparent 60%),
                radial-gradient(800px 500px at 90% -20%, #1c273d 0%, transparent 55%),
                linear-gradient(180deg, var(--color-ink) 0%, var(--color-ink-2) 100%);
    color: var(--color-text);
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background: var(--color-gold);
    color: #1a1a1a;
  }

  h1, h2, h3, h4 {
    font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
    margin: 0 0 0.4em 0;
    line-height: 1.2;
  }

  p {
    color: var(--color-text);
  }

  a {
    color: var(--color-text);
    text-decoration: none;
  }
`;

const theme = {
  colors: {
    ink: '#0b0d14',
    gold: '#F4C85F',
    text: '#f5f7fa',
    muted: '#a6adbb',
  },
};

const AppWrapper = styled.div`
  background-color: transparent;
  color: var(--color-text);
  padding: 0 32px;
  @media (max-width: 1100px) { 
    padding: 0 16px;
  }
`;

const PageContainer = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <AppWrapper>
          <PageContainer>
            <Header />

            <Routes>
              <Route path="/" element={
                <>
                  <CTASection />
                  <GoodlyAbout />
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
          </PageContainer>
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
};

export default App;
