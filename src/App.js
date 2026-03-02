// App.js
import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import CTASection from './CTASection';
import AboutMeSection from './AboutMeSection';
import DemoSection from './DemoSection';
import TestimonialSection from './TestimonialSection';
import GoodlyAbout from './GoodlyAbout';
import Footer from './Footer';
import BlogList from './BlogList';
import BlogPost from './BlogPost';
import './App.css';
import SupportForm from './SupportForm';
import ITLanding from './ITLanding';
import WebLanding from './WebLanding';
import PrivacyPolicy from './PrivacyPolicy';
import SeoHead from './seo/SeoHead';
import { routeMeta } from './seo/routeMeta';
import { buildStructuredData } from './seo/structuredData';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-ink: #0a0d0a;
    --color-ink-2: #0d110d;
    --color-gold: #F4C85F;
    --color-green: #2d5c2d;
    --color-text: #f0f2ee;
    --color-muted: #9aa394;
    --card-bg: rgba(255, 255, 255, 0.04);
    --border: rgba(255, 255, 255, 0.07);
    --shadow-1: 0 10px 30px rgba(0, 0, 0, 0.4);
    --shadow-2: 0 20px 50px rgba(0, 0, 0, 0.55);
    --radius-lg: 20px;
    --radius-md: 12px;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    background: var(--color-ink);
    color: var(--color-text);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background: var(--color-gold);
    color: #1a1a1a;
  }

  h1 {
    font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
    margin: 0 0 0.4em 0;
    line-height: 1.15;
  }

  h2, h3, h4 {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    margin: 0 0 0.4em 0;
    line-height: 1.2;
    letter-spacing: -0.3px;
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
    ink: '#0a0d0a',
    gold: '#F4C85F',
    text: '#f0f2ee',
    muted: '#9aa394',
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

const LocationSeo = () => {
  const location = useLocation();
  const pathname = location.pathname;

  if (pathname.startsWith('/blog/')) {
    return null;
  }

  let routeKey = 'home';

  if (pathname === '/it-services') {
    routeKey = 'itServices';
  } else if (pathname === '/web-services') {
    routeKey = 'webServices';
  } else if (pathname === '/support') {
    routeKey = 'support';
  } else if (pathname === '/privacy') {
    routeKey = 'privacy';
  } else if (pathname === '/blog') {
    routeKey = 'blogIndex';
  }

  return <SeoHead meta={routeMeta[routeKey]} structuredData={buildStructuredData({ routeKey })} />;
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <AppWrapper>
          <PageContainer>
            <Header />
            <LocationSeo />

            <Routes>
              <Route path="/" element={
                <>
                  <CTASection />
                  <GoodlyAbout />
                  <AboutMeSection />
                  <DemoSection />
                  {/* <PricingTable /> */}
                  {/* <TaskDefinition /> */}
                  <TestimonialSection />
                </>
              } />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/support" element={<SupportForm />} />
              <Route path="/it-services" element={<ITLanding />} />
              <Route path="/web-services" element={<WebLanding />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>

            <Footer />
          </PageContainer>
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
};

export default App;
