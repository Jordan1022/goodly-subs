import React from 'react';
import styled from 'styled-components';

const WebAboutWrapper = styled.section`
  padding: 80px 0;
  max-width: 760px;
`;

const Eyebrow = styled.p`
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin: 0 0 16px 0;
  opacity: 0.85;
`;

const Title = styled.h2`
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  color: var(--color-text);
  margin-bottom: 1.2rem;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.85;
  color: var(--color-muted);
  margin-bottom: 0;
`;

const HighlightedText = styled.span`
  color: var(--color-text);
  font-weight: 500;
`;

const ValueProposition = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  margin-top: 52px;
  border-top: 1px solid var(--border);

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Value = styled.div`
  padding: 32px 32px 32px 0;
  border-right: 1px solid var(--border);

  &:last-child {
    padding-left: 32px;
    padding-right: 0;
    border-right: none;
  }

  @media (max-width: 600px) {
    padding: 28px 0;
    border-right: none;
    border-bottom: 1px solid var(--border);

    &:last-child {
      padding-left: 0;
      border-bottom: none;
    }
  }

  h3 {
    color: var(--color-text);
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
  }

  p {
    color: var(--color-muted);
    font-size: 0.95rem;
    line-height: 1.7;
    margin: 0;
  }
`;

const WebAboutSection = () => {
  return (
    <WebAboutWrapper>
      <Eyebrow>Why Goodly Web</Eyebrow>
      <Title>High-performance web, built to last.</Title>
      <Description>
        We create <HighlightedText>high-performance</HighlightedText> web experiences with <HighlightedText>modern tools</HighlightedText>.
        From custom development to platform management, we ensure your web presence drives results and grows with your business.
      </Description>
      <ValueProposition>
        <Value>
          <h3>Performance Optimized</h3>
          <p>Lightning-fast websites with advanced caching, CDN optimization, and modern web technologies for superior user experience.</p>
        </Value>
        <Value>
          <h3>Platform Expertise</h3>
          <p>Deep knowledge across WordPress, Webflow, Cloudflare, and custom solutions to choose the right tool for your needs.</p>
        </Value>
      </ValueProposition>
    </WebAboutWrapper>
  );
};

export default WebAboutSection;
