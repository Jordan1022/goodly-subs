import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
    const base = 'https://forms.fillout.com/t/pEZfhEnjx4us';
    if (!accessCode) return base;
    const url = new URL(base);
    url.searchParams.set('access_code', accessCode);
    return url.toString();
  }, [accessCode]);

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl shadow-[var(--shadow)] p-8 md:p-10">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-2">
            Submit a Support Request
          </h1>
          <p className="text-[var(--text-secondary)] text-base mb-8">
            For product support, development tasks, and change requests.
          </p>

          {!accessCode && (
            <form onSubmit={handleSubmit} aria-label="Access code gate">
              <p className="text-[var(--text-muted)] text-sm mb-4">
                Enter the access code you received from us. You can also use a direct link with{' '}
                <code className="bg-[var(--bg-secondary)] px-1.5 py-0.5 rounded text-xs">?code=YOURCODE</code>.
              </p>
              <div className="flex gap-3 flex-col sm:flex-row">
                <input
                  type="text"
                  inputMode="text"
                  autoComplete="one-time-code"
                  placeholder="Enter access code"
                  value={codeInput}
                  onChange={(e) => setCodeInput(e.target.value)}
                  aria-label="Access code"
                  className="flex-1 px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-medium text-sm hover:bg-[var(--accent-hover)] transition-colors"
                >
                  Unlock
                </button>
              </div>
              {error && (
                <p className="text-red-500 text-sm mt-3">{error}</p>
              )}
              <p className="text-[var(--text-muted)] text-sm mt-4">
                Need access? Contact us and we will provide a code.
              </p>
            </form>
          )}

          {accessCode && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <p className="text-[var(--text-muted)] text-sm m-0">
                  Access granted with code <strong className="text-[var(--text-primary)]">{accessCode}</strong>
                </p>
                <button
                  onClick={handleClear}
                  type="button"
                  className="text-sm text-[var(--accent)] hover:underline"
                >
                  Change code
                </button>
              </div>
              <div className="border border-[var(--border)] rounded-xl overflow-hidden">
                <iframe
                  title="Support Request Form"
                  src={formSrc}
                  allow="clipboard-write; microphone; camera"
                  className="w-full h-[1200px] border-0 bg-transparent"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SupportForm;
