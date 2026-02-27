import React from 'react';

const ValueSection = ({ title, description, highlightedTerms = [], values = [] }) => {
  const renderDescription = () => {
    if (!highlightedTerms.length) return description;

    let result = description;
    const parts = [];
    let remaining = result;

    highlightedTerms.forEach((term) => {
      const idx = remaining.indexOf(term);
      if (idx !== -1) {
        parts.push(remaining.substring(0, idx));
        parts.push(
          <span
            key={term}
            className="font-semibold text-[var(--text-primary)] bg-[var(--accent-light)] px-1 rounded"
          >
            {term}
          </span>
        );
        remaining = remaining.substring(idx + term.length);
      }
    });
    parts.push(remaining);
    return parts;
  };

  return (
    <section className="py-16 md:py-24 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-balance">
        {title}
      </h2>
      <p className="mt-4 text-lg text-[var(--text-secondary)] leading-relaxed">
        {renderDescription()}
      </p>
      {values.length > 0 && (
        <div className="flex flex-wrap justify-center gap-5 mt-10">
          {values.map((value, i) => (
            <div
              key={i}
              className="flex-1 min-w-[260px] max-w-[420px] p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] shadow-[var(--shadow)] text-left transition-transform hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                {value.title}
              </h3>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed m-0">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ValueSection;
