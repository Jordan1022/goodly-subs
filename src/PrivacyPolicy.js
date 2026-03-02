import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
  max-width: 840px;
  margin: 48px auto 0 auto;
  padding: 0 0 20px 0;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 2.8rem);
  letter-spacing: -0.02em;
  margin-bottom: 10px;
`;

const Updated = styled.p`
  color: var(--color-muted);
  margin-bottom: 28px;
`;

const Section = styled.section`
  margin-bottom: 26px;

  h2 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  p {
    color: var(--color-text);
    opacity: 0.95;
    line-height: 1.65;
    margin: 0;
  }
`;

const PrivacyPolicy = () => {
  return (
    <Wrapper>
      <Title>Privacy Policy</Title>
      <Updated>Last updated: March 2, 2026</Updated>

      <Section>
        <h2>Who This Applies To</h2>
        <p>
          This policy applies to OpenClaw, a Notion integration operated by Goodly Development. It explains what data
          is accessed, how it is used, and how it is protected.
        </p>
      </Section>

      <Section>
        <h2>Information We Access</h2>
        <p>
          OpenClaw only accesses Notion content that you explicitly share with the integration, such as pages and
          databases required to run requested workflows.
        </p>
      </Section>

      <Section>
        <h2>How We Use Data</h2>
        <p>
          Data is used only to provide and operate the integration features you request, including reading and updating
          shared Notion content as part of automation and workflow execution.
        </p>
      </Section>

      <Section>
        <h2>Data Sharing</h2>
        <p>
          Your Notion data is not sold. It is not shared with third parties except when required to operate the
          integration or comply with legal obligations.
        </p>
      </Section>

      <Section>
        <h2>Data Retention</h2>
        <p>
          Data is retained only as long as needed to operate OpenClaw and support integration reliability, security,
          and troubleshooting.
        </p>
      </Section>

      <Section>
        <h2>Contact</h2>
        <p>
          For privacy questions or data requests, contact Jordan Allen at{' '}
          <a href="mailto:jordan@goodlydevelopment.com">jordan@goodlydevelopment.com</a>.
        </p>
      </Section>
    </Wrapper>
  );
};

export default PrivacyPolicy;
