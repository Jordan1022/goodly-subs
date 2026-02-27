import React from 'react';

const TestimonialCards = ({ testimonials = [], id }) => {
  if (!testimonials.length) return null;

  return (
    <section id={id} className="py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-12">
        What our clients say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="p-8 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] shadow-[var(--shadow)] flex flex-col"
          >
            {/* Quote icon */}
            <svg
              className="w-8 h-8 text-[var(--accent)] opacity-40 mb-4 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
            </svg>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed italic flex-1">
              {t.text}
            </p>
            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-[var(--border)]">
              {t.image && (
                <img
                  src={t.image}
                  alt={t.alt || t.title}
                  className="w-12 h-12 rounded-lg object-cover border border-[var(--border)]"
                />
              )}
              <div>
                <p className="font-semibold text-[var(--text-primary)] text-sm m-0">
                  {t.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialCards;
