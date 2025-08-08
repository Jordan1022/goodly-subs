// CTASection.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const CTAWrapper = styled.section`
  position: relative;
  margin-top: 24px;
  background: radial-gradient(800px 280px at 20% 10%, rgba(244, 200, 95, 0.15) 0%, rgba(244, 200, 95, 0) 70%),
              linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-1);
  overflow: hidden;
  padding: 64px 40px;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0);
    background-size: 24px 24px;
    opacity: 0.3;
    pointer-events: none;
  }

  @media (max-width: 640px) {
    padding: 48px 20px;
  }
`;

const Heading2 = styled.h2`
  font-size: clamp(2rem, 3.6vw, 3rem);
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: 0.2px;
`;

const Accent = styled.span`
  color: var(--color-gold);
`;

const Heading3 = styled.p`
  font-size: clamp(1.05rem, 1.4vw, 1.25rem);
  margin: 16px 0 28px 0;
  font-weight: 400;
  color: var(--color-muted);
  max-width: 780px;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const ButtonPrimary = styled(Link)`
  font-size: 1.05rem;
  padding: 12px 20px;
  border-radius: 999px;
  background: var(--color-gold);
  color: #1a1a1a;
  border: 1px solid rgba(0,0,0,0.12);
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.2s ease;
  will-change: transform;
  display: inline-flex;
  align-items: center;
  gap: 10px;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 22px rgba(244, 200, 95, 0.25);
  }
`;

const ButtonSecondary = styled.a`
  font-size: 1.05rem;
  padding: 12px 20px;
  border-radius: 999px;
  background: transparent;
  color: var(--color-gold);
  border: 1px solid var(--color-gold);
  cursor: pointer;
  transition: transform 0.15s ease, background 0.2s ease, color 0.2s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;

  &:hover {
    transform: translateY(-1px);
    background: rgba(244, 200, 95, 0.08);
  }
`;

const CTASection = () => {
  return (
    <CTAWrapper>
      <Heading2>
        Building <Accent>exceptional</Accent> software and IT solutions
      </Heading2>
      <Heading3>
        Modern development, automations, integrations and ongoing care. Thoughtfully executed, elegantly delivered.
      </Heading3>
      <ButtonRow>
        <ButtonPrimary
          to="pricing-table"
          smooth={true}
          duration={500}
          spy={true}
          exact={true}
          offset={-80}
        >
          See plans
        </ButtonPrimary>

        <ButtonSecondary
          href="https://calendly.com/jordan-goodly/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a call
        </ButtonSecondary>
      </ButtonRow>
    </CTAWrapper>
  );
};

export default CTASection;
