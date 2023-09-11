// Header.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

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

const Tab = styled(Link)`
margin: 0 10px;
color: #fff;
cursor: pointer;
font-family: Knoxville;
  /* Your tab styles here */
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src="gdLogo.png" alt="Logo" />
      <Navigation>
        <Tab
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
          offset={-80}
          to="about-me">SERVICES</Tab>
        <Tab
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
          offset={-80}
          to="pricing-table"
        >PLANS</Tab>
        <Tab
          to="testimony"
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
          offset={-80}
        >TESTIMONIALS</Tab>
      </Navigation>
    </HeaderWrapper>
  );
};

export default Header;
