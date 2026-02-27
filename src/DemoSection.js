import React, { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DemoSectionWrapper = styled.div`
  padding: 80px 0;

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--color-gold);
    &:after {
      font-size: 18px;
      font-weight: 700;
    }
  }

  .swiper-pagination-bullet {
    background: var(--color-muted);
    opacity: 0.5;
  }

  .swiper-pagination-bullet-active {
    background: var(--color-gold);
    opacity: 1;
  }
`;

const SectionHeader = styled.div`
  margin-bottom: 40px;
`;

const Eyebrow = styled.p`
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin: 0 0 16px 0;
  opacity: 0.85;
`;

const Title = styled.h2`
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  color: var(--color-text);
  margin: 0;
  font-weight: 600;
`;

const TabNav = styled.div`
  display: flex;
  gap: 0;
  border-bottom: 1px solid var(--border);
  margin-bottom: 36px;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Tab = styled.button`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 12px 20px;
  border: none;
  border-bottom: 2px solid ${props => props.$active ? 'var(--color-gold)' : 'transparent'};
  margin-bottom: -1px;
  background: transparent;
  cursor: pointer;
  color: ${props => props.$active ? 'var(--color-text)' : 'var(--color-muted)'};
  transition: color 0.2s ease, border-color 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: var(--color-text);
  }
`;

const TabPanel = styled.div`
  display: ${props => props.$active ? 'block' : 'none'};

  .swiper {
    padding-bottom: 44px;
  }
`;

const DemoImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  display: block;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.88;
  }
`;

const Caption = styled.p`
  color: var(--color-muted);
  font-size: 0.88rem;
  margin: 0;
  line-height: 1.6;
  padding-top: 4px;
`;

const tabs = [
  {
    id: 'tab1',
    label: 'Product Development',
    caption: 'Modern product experiences across finance, media, and membership platforms.',
    slides: [
      { src: 'weGive1.png', alt: 'Financial Processing Platform' },
      { src: 'weGive2.png', alt: 'Financial Platform Features' },
      { src: 'mn81.png', alt: 'Music Streaming Service' },
    ],
  },
  {
    id: 'tab2',
    label: 'Automations',
    caption: 'Automations for lead generation, customer onboarding, and revenue ops.',
    slides: [
      { src: 'automationHub.png', alt: 'Automation Hub' },
      { src: 'auto4.png', alt: 'Automation Example' },
      { src: 'auto3.png', alt: 'Automation Workflow' },
    ],
  },
  {
    id: 'tab3',
    label: 'Admin Tools & Dashboards',
    caption: 'Internal dashboards, permission controls, and developer tooling for growing products.',
    slides: [
      { src: 'gcp.png', alt: 'Google Cloud Platform' },
      { src: 'userManagement.png', alt: 'User Management' },
      { src: 'aws.png', alt: 'AWS Infrastructure' },
    ],
  },
];

const DemoSection = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const active = tabs.find(t => t.id === activeTab);

  return (
    <DemoSectionWrapper>
      <SectionHeader>
        <Eyebrow>Selected Work</Eyebrow>
        <Title>Recent projects</Title>
      </SectionHeader>

      <TabNav>
        {tabs.map(tab => (
          <Tab
            key={tab.id}
            $active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </Tab>
        ))}
      </TabNav>

      {tabs.map(tab => (
        <TabPanel key={tab.id} $active={activeTab === tab.id}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              640: { slidesPerView: 1.4 },
              1024: { slidesPerView: 2 },
            }}
            loop={true}
            centeredSlides={true}
          >
            {tab.slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <a href={slide.src} target="_blank" rel="noopener noreferrer">
                  <DemoImage src={slide.src} alt={slide.alt} />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          <Caption>{tab.caption}</Caption>
        </TabPanel>
      ))}
    </DemoSectionWrapper>
  );
};

export default DemoSection;
