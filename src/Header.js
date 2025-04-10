// Header.js
import React from 'react';
import styled from 'styled-components';
import { scroller } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

const HeaderWrapper = styled.div`
padding-top: 20px;
background-color: #000;
display: flex;
justify-content: space-between;
margin-bottom: 50px
  /* Your header styles here */
`;

const Logo = styled.img`
width: 200px;
margin-left: 20px;
@media (max-width: 760px) {
width: 150px;
}
@media (max-width: 500px) {
  width: 80px;
}
  /* Your logo styles here */
`;

const Navigation = styled.div`
  /* Your navigation styles here */
`;

const Tab = styled.span`
margin: 0 10px;
color: #F4C85F;
cursor: pointer;
font-family: Knoxville;
text-decoration: none;
@media (min-width: 760px) {
  font-size: 1.5rem;
}
/* Add hover effect if needed */
&:hover {
  /* Example: slightly brighter color */
  filter: brightness(1.2);
}
`;

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollLinkClick = (targetId) => {
    const scrollOptions = {
      smooth: true,
      duration: 500,
      offset: -80, // Keep your original offset
    };

    // Check if we are already on the home page
    if (location.pathname === '/') {
      scroller.scrollTo(targetId, scrollOptions);
    } else {
      // Navigate to home page first
      navigate('/');
      // Use setTimeout to allow navigation and rendering before scrolling
      setTimeout(() => {
        scroller.scrollTo(targetId, scrollOptions);
      }, 100); // Adjust timeout if necessary (e.g., 150ms)
    }
  };

  return (
    <HeaderWrapper>
      <Logo src="GoodlyG.svg" alt="Logo" />
      <Navigation>
        <Tab onClick={() => handleScrollLinkClick('about-me')}>SERVICES</Tab>
        <Tab onClick={() => handleScrollLinkClick('pricing-table')}>PLANS</Tab>
        <Tab onClick={() => handleScrollLinkClick('testimony')}>TESTIMONIALS</Tab>
        <Tab as={RouterLink} to="/blog">BLOG</Tab>
      </Navigation>
    </HeaderWrapper>
  );
};

export default Header;
