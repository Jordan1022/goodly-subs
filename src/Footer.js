// Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  /* Your footer styles here */
`;

const LinkedInLink = styled.a`
  /* Your LinkedIn link styles here */
`;

const EmailLink = styled.a`
  /* Your email link styles here */
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkedInLink href="https://www.linkedin.com/" target="_blank">
        LinkedIn
      </LinkedInLink>
      <EmailLink href="mailto:yourname@example.com">Email</EmailLink>
    </FooterWrapper>
  );
};

export default Footer;
