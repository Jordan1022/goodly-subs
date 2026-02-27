import React from 'react';
import styled from 'styled-components';

const GoodlyAboutWrapper = styled.section`
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

const GoodlyAbout = () => {
  return (
    <GoodlyAboutWrapper>
      <Eyebrow>Why Goodly</Eyebrow>
      <Title>An old word. A clear standard.</Title>
      <Description>
        We chose our name from an old English word meaning <HighlightedText>of exceptional quality</HighlightedText> and <HighlightedText>abundance</HighlightedText>.
        It captures how we work with product teams: delivering abundant value through exceptional quality builds and continuous improvement.
      </Description>
      <ValueProposition>
        <Value>
          <h3>Quality First</h3>
          <p>We believe in doing things right the first time, shipping code that is reliable, maintainable, and ready to scale with your product.</p>
        </Value>
        <Value>
          <h3>Efficiency Driven</h3>
          <p>Our experienced team turns complex product requirements into streamlined releases that ship faster and with less stress.</p>
        </Value>
      </ValueProposition>
    </GoodlyAboutWrapper>
  );
};

export default GoodlyAbout;
