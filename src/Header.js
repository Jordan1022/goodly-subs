// Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
padding-top: 20px;
background-color: #000;
display: flex;
justify-content: space-between;
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
        <Tab href="#section1">About</Tab>
        <Tab href="#section2">Subs</Tab>
        <Tab href="#section3">Testimonial</Tab>
      </Navigation>
    </HeaderWrapper>
  );
};

export default Header;
