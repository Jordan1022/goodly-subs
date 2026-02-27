import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from './pages/HomePage';
import ITLanding from './ITLanding';
import WebLanding from './WebLanding';
import BlogList from './BlogList';
import BlogPost from './BlogPost';
import SupportForm from './SupportForm';
import SeoHead from './seo/SeoHead';
import { routeMeta } from './seo/routeMeta';
import { buildStructuredData } from './seo/structuredData';
import './index.css';

const LocationSeo = () => {
  const location = useLocation();
  const pathname = location.pathname;

  if (pathname.startsWith('/blog/')) return null;

  let routeKey = 'home';
  if (pathname === '/it-services') routeKey = 'itServices';
  else if (pathname === '/web-services') routeKey = 'webServices';
  else if (pathname === '/support') routeKey = 'support';
  else if (pathname === '/blog') routeKey = 'blogIndex';

  return <SeoHead meta={routeMeta[routeKey]} structuredData={buildStructuredData({ routeKey })} />;
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <Header />
        <LocationSeo />
        <main className="max-w-site mx-auto px-5 md:px-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/support" element={<SupportForm />} />
            <Route path="/it-services" element={<ITLanding />} />
            <Route path="/web-services" element={<WebLanding />} />
          </Routes>
        </main>
        <div className="max-w-site mx-auto px-5 md:px-8">
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
