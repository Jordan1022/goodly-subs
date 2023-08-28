// Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
height: 100px;
  /* Your footer styles here */
  display: flex;
  justify-content: space-between;
  width: 150px;
  padding-bottom:20px;
  @media (max-width: 1100px) {
  padding-left: 20px;
  }
`;

const LinkedInLink = styled.a`
margin-top: auto;
color: #fff;
  /* Your LinkedIn link styles here */
`;

const EmailLink = styled.a`
margin-top: auto;
color: #fff;
  /* Your email link styles here */
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkedInLink href="https://www.linkedin.com/in/jordan-allen-gd/" target="_blank">
        LinkedIn
      </LinkedInLink>
      <EmailLink href="mailto:yourname@example.com">Email</EmailLink>
    </FooterWrapper>
  );
};

export default Footer;
