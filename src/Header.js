// Header.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

  /* Your logo styles here */
`;

const Navigation = styled.div`
  /* Your navigation styles here */
`;

const Tab = styled.a`
margin: 0 10px;
color: #fff;
  /* Your tab styles here */
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src="logo.svg" alt="Logo" />
      <Navigation>
        <Tab to="/services">Services</Tab>
        <Tab to="/subs">Subs</Tab>
        <Tab to="/testimonials">Testimonials</Tab>
      </Navigation>
    </HeaderWrapper>
  );
};

export default Header;
