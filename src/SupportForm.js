// SupportForm.js
import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const PageWrapper = styled.section`
  margin: 40px 0 80px 0;
`;

const Card = styled.div`
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-1);
  padding: 24px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  color: var(--color-muted);
  margin-top: 0;
`;

const FormRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 12px 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: rgba(255,255,255,0.03);
  color: var(--color-text);
`;

const Button = styled.button`
  padding: 12px 16px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  background: rgba(244, 200, 95, 0.08);
  color: var(--color-gold);
  cursor: pointer;
`;

const HelpText = styled.p`
  color: var(--color-muted);
  font-size: 0.95rem;
`;

const IframeWrapper = styled.div`
  margin-top: 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-1);
`;

const Frame = styled.iframe`
  width: 100%;
  height: 1200px;
  border: 0;
  background: transparent;
`;

const STORAGE_KEY = 'supportForm.accessCode';

const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

const SupportForm = () => {
  const query = useQuery();
  const [codeInput, setCodeInput] = useState('');
  const [accessCode, setAccessCode] = useState(localStorage.getItem(STORAGE_KEY) || '');
  const [error, setError] = useState('');

  useEffect(() => {
    const qp = query.get('code');
    if (qp && validateCode(qp)) {
      setAccessCode(qp);
      localStorage.setItem(STORAGE_KEY, qp);
    }
  }, [query]);

  const validateCode = (value) => {
    if (!value) return false;
    // Parse allowed codes from environment variable
    const allowedCodes = process.env.REACT_APP_ALLOWED_CODES?.split(',') || [];
    return allowedCodes.includes(value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateCode(codeInput)) {
      setAccessCode(codeInput.trim());
      localStorage.setItem(STORAGE_KEY, codeInput.trim());
      setError('');
    } else {
      setError('Invalid access code.');
    }
  };

  const handleClear = () => {
    setAccessCode('');
    localStorage.removeItem(STORAGE_KEY);
    setCodeInput('');
    setError('');
  };

  const formSrc = useMemo(() => {
    // Replace with your Fillout form URL. You can pass the accessCode as a query param if desired.
    const base = 'https://forms.fillout.com/t/pEZfhEnjx4us';
    if (!accessCode) return base;
    const url = new URL(base);
    url.searchParams.set('access_code', accessCode);
    return url.toString();
  }, [accessCode]);

  return (
    <PageWrapper>
      <Card>
        <Title>Submit a Support Request</Title>
        <Subtitle>For product support, development tasks, and change requests.</Subtitle>

        {!accessCode && (
          <form onSubmit={handleSubmit} aria-label="Access code gate">
            <HelpText>Enter the access code you received from us. You can also use a direct link with <code>?code=YOURCODE</code>.</HelpText>
            <FormRow>
              <Input
                type="text"
                inputMode="text"
                autoComplete="one-time-code"
                placeholder="Enter access code"
                value={codeInput}
                onChange={(e) => setCodeInput(e.target.value)}
                aria-label="Access code"
              />
              <Button type="submit">Unlock</Button>
            </FormRow>
            {error && <HelpText style={{ color: '#ffb3b3' }}>{error}</HelpText>}
            <HelpText style={{ marginTop: 12 }}>Need access? Contact us and we will provide a code.</HelpText>
          </form>
        )}

        {accessCode && (
          <div>
            <HelpText>
              Access granted with code <strong>{accessCode}</strong>. <Button onClick={handleClear} type="button">Change code</Button>
            </HelpText>
            <IframeWrapper>
              <Frame
                title="Support Request Form"
                src={formSrc}
                allow="clipboard-write; microphone; camera"
              />
            </IframeWrapper>
          </div>
        )}
      </Card>
    </PageWrapper>
  );
};

export default SupportForm;
