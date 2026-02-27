import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DemoCarousel = ({ tabs = [] }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!tabs.length) return null;

  return (
    <section className="py-16 md:py-24">
      {/* Tab pills */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`
              px-5 py-2.5 rounded-lg text-sm font-medium transition-all border
              ${activeTab === i
                ? 'bg-[var(--accent)] text-white border-[var(--accent)]'
                : 'bg-transparent text-[var(--text-secondary)] border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)]'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Carousel panels */}
      {tabs.map((tab, i) => (
        <div key={i} className={activeTab === i ? 'block' : 'hidden'}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              640: { slidesPerView: 1.4 },
              1024: { slidesPerView: 2 },
            }}
            loop={true}
            centeredSlides={true}
            className="pb-12"
          >
            {tab.slides.map((slide, j) => (
              <SwiperSlide key={j}>
                <a href={slide.src} target="_blank" rel="noopener noreferrer" className="block">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-[350px] md:h-[400px] object-cover rounded-xl border border-[var(--border)] shadow-[var(--shadow)] transition-transform hover:scale-[1.02] cursor-pointer"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          {tab.caption && (
            <p className="text-center text-[var(--text-muted)] text-sm mt-4 px-4">
              {tab.caption}
            </p>
          )}
        </div>
      ))}
    </section>
  );
};

export default DemoCarousel;
