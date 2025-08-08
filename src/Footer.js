// Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 28px 0 40px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border);
  margin-top: 60px;
`;

const Left = styled.div`
  color: var(--color-muted);
  font-size: 0.95rem;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const LinkA = styled.a`
  color: var(--color-text);
  font-size: 0.95rem;
  opacity: 0.9;
  transition: color 0.2s ease, opacity 0.2s ease;
  &:hover {
    color: var(--color-gold);
    opacity: 1;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Left>© {new Date().getFullYear()} Goodly Development</Left>
      <Right>
        <LinkA href="https://www.linkedin.com/in/jordan-allen-gd/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </LinkA>
        <LinkA href="mailto:jordan@goodlydevelopment.com">jordan@goodlydevelopment.com</LinkA>
      </Right>
    </FooterWrapper>
  );
};

export default Footer;
