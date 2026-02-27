// ITCTASection.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const CTAWrapper = styled.section`
  padding: 100px 0 80px;

  @media (max-width: 640px) {
    padding: 72px 0 60px;
  }
`;

const Eyebrow = styled.p`
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin: 0 0 20px 0;
  opacity: 0.85;
`;

const Heading2 = styled.h1`
  font-size: clamp(2.8rem, 5.5vw, 4.5rem);
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.5px;
  max-width: 820px;
`;

const Accent = styled.span`
  color: var(--color-gold);
`;

const Heading3 = styled.p`
  font-size: clamp(1rem, 1.4vw, 1.2rem);
  margin: 20px 0 36px 0;
  font-weight: 400;
  color: var(--color-muted);
  max-width: 600px;
  line-height: 1.75;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const ButtonPrimary = styled(Link)`
  font-size: 0.95rem;
  font-weight: 600;
  padding: 13px 26px;
  border-radius: 999px;
  background: var(--color-gold);
  color: #1a1a1a;
  border: none;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  will-change: transform;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(244, 200, 95, 0.3);
  }
`;

const ButtonSecondary = styled.a`
  font-size: 0.95rem;
  font-weight: 500;
  padding: 13px 26px;
  border-radius: 999px;
  background: transparent;
  color: var(--color-text);
  border: 1px solid rgba(255, 255, 255, 0.18);
  cursor: pointer;
  transition: transform 0.15s ease, border-color 0.2s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(255, 255, 255, 0.35);
  }
`;

const ITCTASection = () => {
  return (
    <CTAWrapper>
      <Eyebrow>Managed IT · Software Support · System Troubleshooting</Eyebrow>
      <Heading2>
        <Accent>Reliable</Accent> IT solutions for growing businesses
      </Heading2>
      <Heading3>
        Comprehensive managed IT services, network infrastructure, and cybersecurity solutions.
        Keep your business running smoothly while we handle the technology.
      </Heading3>
      <ButtonRow>
        <ButtonPrimary
          to="it-services"
          smooth={true}
          duration={500}
          spy={true}
          exact={true}
          offset={-80}
        >
          View Services
        </ButtonPrimary>

        <ButtonSecondary
          href="https://calendly.com/jordan-goodly/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          Schedule Consultation
        </ButtonSecondary>
      </ButtonRow>
    </CTAWrapper>
  );
};

export default ITCTASection;
