import React from 'react';
import styled from 'styled-components';

const LegalShell = styled.main`
  max-width: 880px;
  margin: 72px auto 0;
  padding: 48px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-1);

  @media (max-width: 760px) {
    margin-top: 40px;
    padding: 28px 20px;
  }
`;

const Kicker = styled.p`
  margin: 0 0 12px;
  color: var(--color-gold);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const Title = styled.h1`
  font-size: clamp(2.2rem, 5vw, 4rem);
  color: var(--color-text);
`;

const Updated = styled.p`
  margin: 0 0 32px;
  color: var(--color-muted);
`;

const Section = styled.section`
  margin-top: 30px;

  h2 {
    color: var(--color-text);
    font-size: 1.3rem;
  }

  p,
  li {
    color: rgba(240, 242, 238, 0.86);
    line-height: 1.7;
  }

  ul {
    padding-left: 22px;
  }

  strong {
    color: var(--color-text);
  }
`;

const ContactLink = styled.a`
  color: var(--color-gold);
  text-decoration: underline;
  text-underline-offset: 3px;
`;

const LegalPage = ({ title, children }) => (
  <LegalShell>
    <Kicker>Goodly Development</Kicker>
    <Title>{title}</Title>
    <Updated>Last updated: May 13, 2026</Updated>
    {children}
  </LegalShell>
);

const supportEmail = 'jordan@goodlydevelopment.com';

const PrivacyPolicy = () => (
  <LegalPage title="Privacy Policy">
    <Section>
      <h2>Overview</h2>
      <p>
        Goodly Development provides software, web, IT, and OpenClaw messaging services. This
        policy explains how we collect, use, and protect information, including phone numbers
        used for OpenClaw Messaging.
      </p>
    </Section>

    <Section>
      <h2>Information We Collect</h2>
      <ul>
        <li>Contact information such as name, email address, company name, and phone number.</li>
        <li>Support, project, and account details you choose to provide.</li>
        <li>OpenClaw Messaging records such as SMS message content, timestamps, delivery status, and reply history.</li>
        <li>Basic website analytics and technical information used to maintain site reliability.</li>
      </ul>
    </Section>

    <Section>
      <h2>How We Use Information</h2>
      <p>
        We use information to provide requested services, respond to support and project requests,
        operate OpenClaw Messaging, maintain service security, and communicate about active work.
        OpenClaw Messaging is used for operational, support, administrative, and account-related
        messages requested by authorized users.
      </p>
    </Section>

    <Section>
      <h2>SMS Data Sharing</h2>
      <p>
        SMS opt-in data and phone numbers will not be sold, rented, or shared with third parties
        for marketing or promotional purposes. We may share SMS-related data with service providers,
        including Twilio, only as needed to deliver messages, maintain security, comply with law,
        or operate the requested messaging service.
      </p>
    </Section>

    <Section>
      <h2>Retention and Security</h2>
      <p>
        We retain information only as long as needed for service delivery, business records,
        security, compliance, and dispute resolution. We use reasonable administrative and technical
        safeguards to protect information from unauthorized access.
      </p>
    </Section>

    <Section>
      <h2>Your Choices</h2>
      <p>
        You may request access, correction, or deletion of your information by contacting us. To
        stop SMS messages, reply STOP to any OpenClaw message. For help, reply HELP or contact{' '}
        <ContactLink href={`mailto:${supportEmail}`}>{supportEmail}</ContactLink>.
      </p>
    </Section>
  </LegalPage>
);

const TermsAndConditions = () => (
  <LegalPage title="Terms and Conditions">
    <Section>
      <h2>Program Name</h2>
      <p>OpenClaw Messaging by Goodly Development.</p>
    </Section>

    <Section>
      <h2>Program Description</h2>
      <p>
        OpenClaw Messaging sends operational, support, administrative, and account-related text
        messages between Goodly Development and authorized OpenClaw users. Messages may include
        replies to user requests, automation status, account coordination, and support follow-up.
      </p>
    </Section>

    <Section>
      <h2>Consent</h2>
      <p>
        By providing your phone number and requesting OpenClaw SMS communication, you consent to
        receive text messages from Goodly Development for OpenClaw Messaging. Consent is not a
        condition of purchasing any goods or services.
      </p>
    </Section>

    <Section>
      <h2>Message Frequency and Fees</h2>
      <p>
        Message frequency varies based on your requests and account activity. Message and data
        rates may apply. Carriers are not liable for delayed or undelivered messages.
      </p>
    </Section>

    <Section>
      <h2>Opt-Out and Help</h2>
      <p>
        Reply <strong>STOP</strong> to cancel OpenClaw Messaging at any time. After you reply STOP,
        we may send one confirmation message and then stop SMS messaging unless you opt in again.
        Reply <strong>HELP</strong> for support, or email{' '}
        <ContactLink href={`mailto:${supportEmail}`}>{supportEmail}</ContactLink>.
      </p>
    </Section>

    <Section>
      <h2>Privacy</h2>
      <p>
        We handle personal information according to our privacy policy. SMS opt-in data and phone
        numbers are not sold, rented, or shared with third parties for marketing or promotional
        purposes.
      </p>
    </Section>
  </LegalPage>
);

const SmsConsent = () => (
  <LegalPage title="SMS Consent">
    <Section>
      <h2>How End Users Opt In</h2>
      <p>
        End users opt in to OpenClaw Messaging by directly requesting SMS communication from Goodly
        Development during OpenClaw setup, support, or account coordination and by providing their
        phone number. Before messages are sent, users are told that OpenClaw Messaging sends
        operational, support, administrative, and account-related texts; message frequency varies;
        message and data rates may apply; consent is not a condition of purchase; reply STOP to
        opt out; and reply HELP for support.
      </p>
    </Section>

    <Section>
      <h2>Alternative Opt-In</h2>
      <p>
        Users may also opt in by texting START to an OpenClaw Messaging number after receiving the
        same disclosure from Goodly Development or from an authorized OpenClaw account setup flow.
      </p>
    </Section>

    <Section>
      <h2>Program Scope</h2>
      <p>
        OpenClaw Messaging is a low-volume operational messaging program for authorized users. It
        is not used for third-party marketing, lead generation, affiliate promotion, or unrelated
        promotional campaigns.
      </p>
    </Section>
  </LegalPage>
);

export { PrivacyPolicy, SmsConsent, TermsAndConditions };
