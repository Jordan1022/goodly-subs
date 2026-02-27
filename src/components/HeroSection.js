import React from 'react';
import { Link } from 'react-scroll';

const HeroSection = ({
  title,
  accentWord,
  subtitle,
  primaryCTA,
  secondaryCTA,
}) => {
  // Build the heading by splitting on the accent word
  const renderTitle = () => {
    if (!accentWord) return title;
    const parts = title.split(accentWord);
    return (
      <>
        {parts[0]}
        <span className="text-[var(--accent)]">{accentWord}</span>
        {parts[1] || ''}
      </>
    );
  };

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-tight text-balance">
          {renderTitle()}
        </h1>
        <p className="mt-5 text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
          {subtitle}
        </p>
        <div className="flex flex-wrap items-center gap-3 mt-8">
          {primaryCTA && (
            primaryCTA.scrollTo ? (
              <Link
                to={primaryCTA.scrollTo}
                smooth={true}
                duration={500}
                offset={-80}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-medium text-base cursor-pointer hover:bg-[var(--accent-hover)] transition-colors"
              >
                {primaryCTA.label}
              </Link>
            ) : (
              <a
                href={primaryCTA.href}
                target={primaryCTA.external ? '_blank' : undefined}
                rel={primaryCTA.external ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-medium text-base hover:bg-[var(--accent-hover)] transition-colors"
              >
                {primaryCTA.label}
              </a>
            )
          )}
          {secondaryCTA && (
            <a
              href={secondaryCTA.href}
              target={secondaryCTA.external ? '_blank' : undefined}
              rel={secondaryCTA.external ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center px-6 py-3 rounded-lg border border-[var(--border)] text-[var(--text-primary)] font-medium text-base hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              {secondaryCTA.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
