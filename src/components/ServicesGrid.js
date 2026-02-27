import React from 'react';

const ServicesGrid = ({
  id,
  title,
  subtitle,
  services = [],
  columns = 2,
  headerImage,
  headerImageAlt,
}) => {
  const gridCols = columns === 3
    ? 'md:grid-cols-2 lg:grid-cols-3'
    : 'md:grid-cols-2';

  return (
    <section id={id} className="py-16 md:py-24">
      {/* Header with optional image */}
      {headerImage ? (
        <div className="flex items-center gap-10 mb-14 flex-col lg:flex-row">
          <img
            src={headerImage}
            alt={headerImageAlt || ''}
            className="w-64 h-64 object-cover rounded-2xl shadow-[var(--shadow)] border border-[var(--border)]"
          />
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Service cards */}
      <div className={`grid grid-cols-1 ${gridCols} gap-6`}>
        {services.map((service, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] shadow-[var(--shadow)] transition-all hover:-translate-y-1 hover:shadow-md"
          >
            {service.icon && (
              <div className="w-12 h-12 rounded-lg bg-[var(--accent-light)] flex items-center justify-center mb-4 text-[var(--accent)] text-xl">
                {service.icon}
              </div>
            )}
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
              {service.title}
            </h3>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed m-0">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
