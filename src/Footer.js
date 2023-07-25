// Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
height: 300px;
  /* Your footer styles here */
  display: flex;
  justify-content: space-between;
  width: 150px;
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
