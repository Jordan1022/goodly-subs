// CTASection.js
import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-scroll';

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

/* const ButtonPrimary = styled(Link)`
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
`; */

const ButtonSecondary = styled.a`
  font-size: 0.95rem;
  font-weight: 600;
  padding: 13px 26px;
  border-radius: 999px;
  background: var(--color-gold);
  color: #1a1a1a;
  border: none;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(244, 200, 95, 0.3);
  }
`;

const CTASection = () => {
  return (
    <CTAWrapper>
      <Eyebrow>Development · Automation · Integrations</Eyebrow>
      <Heading2>
        Building <Accent>exceptional</Accent> software products
      </Heading2>
      <Heading3>
        Modern product development, automations, and integrations for teams who need to ship fast. Thoughtfully executed, elegantly delivered.
      </Heading3>
      <ButtonRow>
        {/* <ButtonPrimary
          to="pricing-table"
          smooth={true}
          duration={500}
          spy={true}
          exact={true}
          offset={-80}
        >
          See plans
        </ButtonPrimary> */}

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
