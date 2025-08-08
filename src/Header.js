// Header.js
import React from 'react';
import styled from 'styled-components';
import { scroller } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 18px 0;
  backdrop-filter: saturate(120%) blur(10px);
  background: linear-gradient(180deg, rgba(10, 12, 20, 0.75) 0%, rgba(10, 12, 20, 0.35) 100%);
  border-bottom: 1px solid var(--border);
  margin-bottom: 40px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 180px;
  height: auto;
  margin-left: 8px;
  filter: drop-shadow(0 4px 16px rgba(0,0,0,0.25));
  @media (max-width: 760px) {
    width: 140px;
  }
  @media (max-width: 500px) {
    width: 100px;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const Tab = styled.span`
  position: relative;
  padding: 8px 2px;
  margin: 0 6px;
  color: var(--color-text);
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  letter-spacing: 0.2px;
  transition: color 0.2s ease;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 0;
    height: 2px;
    background: var(--color-gold);
    transition: width 0.25s ease;
  }

  &:hover {
    color: var(--color-gold);
  }

  &:hover:after {
    width: 100%;
  }

  @media (min-width: 760px) {
    font-size: 1rem;
  }
`;

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollLinkClick = (targetId) => {
    const scrollOptions = {
      smooth: true,
      duration: 500,
      offset: -80,
    };

    if (location.pathname === '/') {
      scroller.scrollTo(targetId, scrollOptions);
    } else {
      navigate('/');
      setTimeout(() => {
        scroller.scrollTo(targetId, scrollOptions);
      }, 120);
    }
  };

  return (
    <HeaderWrapper>
      <Row>
        <Logo src="GoodlyG.svg" alt="Logo" />
        <Navigation>
          <Tab onClick={() => handleScrollLinkClick('about-me')}>Services</Tab>
          <Tab onClick={() => handleScrollLinkClick('pricing-table')}>Plans</Tab>
          <Tab onClick={() => handleScrollLinkClick('testimony')}>Testimonials</Tab>
          <Tab as={RouterLink} to="/blog">Blog</Tab>
        </Navigation>
      </Row>
    </HeaderWrapper>
  );
};

export default Header;
