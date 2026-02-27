import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-[var(--border)] mt-16 py-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[var(--text-muted)] text-sm m-0">
          &copy; {new Date().getFullYear()} Goodly Development
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/jordan-allen-gd/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-secondary)] text-sm hover:text-[var(--accent)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:jordan@goodlydevelopment.com"
            className="text-[var(--text-secondary)] text-sm hover:text-[var(--accent)] transition-colors"
          >
            jordan@goodlydevelopment.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
