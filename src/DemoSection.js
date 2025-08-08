import React, { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DemoSectionWrapper = styled.div`
  max-width: 1200px;
  margin: 100px auto;
  padding: 0 20px;

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--color-gold);
    &:after {
      font-size: 22px;
    }
    @media (max-width: 768px) {
      &:after {
        font-size: 18px;
      }
    }
  }

  .swiper-pagination-bullet {
    background: var(--color-gold);
    opacity: 0.6;
  }

  .swiper-pagination-bullet-active {
    background: var(--color-gold);
    opacity: 1;
  }
`;

const TabList = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const Tab = styled.button`
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  padding: 10px 16px;
  border: 1px solid ${props => (props.active ? 'var(--color-gold)' : 'transparent')};
  border-radius: 999px;
  background: ${props => (props.active ? 'rgba(244, 200, 95, 0.08)' : 'transparent')};
  cursor: pointer;
  color: ${props => (props.active ? 'var(--color-gold)' : 'var(--color-text)')};
  transition: all 0.25s ease;

  &:hover {
    color: var(--color-gold);
    background: rgba(244, 200, 95, 0.08);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 8px 14px;
  }
`;

const DemoImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s ease;
  cursor: pointer;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-1);

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const TabPanel = styled.div`
  display: ${props => (props.active ? 'block' : 'none')};
  margin-top: 30px;

  .swiper {
    padding: 20px 5px;
  }

  .swiper-slide {
    transform: scale(0.95);
    transition: transform 0.3s ease;
  }

  .swiper-slide-active {
    transform: scale(1);
  }
`;

const Caption = styled.div`
  color: var(--color-muted);
  margin: 18px 0;
  font-size: 1rem;
  text-align: center;
  padding: 0 20px;
  line-height: 1.6;
`;

const DemoSection = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <DemoSectionWrapper>
      <TabList>
        <Tab
          active={activeTab === 'tab1'}
          onClick={() => setActiveTab('tab1')}
        >
          Website Development
        </Tab>
        <Tab
          active={activeTab === 'tab2'}
          onClick={() => setActiveTab('tab2')}
        >
          Automations
        </Tab>
        <Tab
          active={activeTab === 'tab3'}
          onClick={() => setActiveTab('tab3')}
        >
          Software Management
        </Tab>
      </TabList>

      <TabPanel active={activeTab === 'tab1'}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2 }
          }}
          loop={true}
          centeredSlides={true}
        >
          <SwiperSlide>
            <a href="weGive1.png" target="_blank" rel="noopener noreferrer">
              <DemoImage src="weGive1.png" alt="Financial Processing Platform" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="weGive2.png" target="_blank" rel="noopener noreferrer">
              <DemoImage src="weGive2.png" alt="Financial Platform Features" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="mn81.png" target="_blank" rel="noopener noreferrer">
              <DemoImage src="mn81.png" alt="Music Streaming Service" />
            </a>
          </SwiperSlide>
        </Swiper>
        <Caption>Financial Processing Platform and Music Streaming Service</Caption>
      </TabPanel>

      <TabPanel active={activeTab === 'tab2'}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2 }
          }}
          loop={true}
          centeredSlides={true}
        >
          <SwiperSlide>
            <a href="automationHub.png" target="_blank" rel="noopener noreferrer">
              <DemoImage src="automationHub.png" alt="Automation Hub" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="auto4.png" target="_blank" rel="noopener noreferrer">
              <DemoImage src="auto4.png" alt="Automation Example" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="auto3.png" target="_blank" rel="noopener noreferrer">
              <DemoImage src="auto3.png" alt="Automation Workflow" />
            </a>
          </SwiperSlide>
        </Swiper>
        <Caption>Automations for lead generation and sales</Caption>
      </TabPanel>

      <TabPanel active={activeTab === 'tab3'}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2 }
          }}
          loop={true}
          centeredSlides={true}
        >
          <SwiperSlide>
            <a href="gcp.png" target="_blank" rel="noopener noreferrer">
              <DemoImage src="gcp.png" alt="Google Cloud Platform" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="userManagement.png" target="_blank" rel="noopener noreferrer">
              <DemoImage src="userManagement.png" alt="User Management" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="aws.png" target="_blank" rel="noopener noreferrer">
              <DemoImage src="aws.png" alt="AWS Infrastructure" />
            </a>
          </SwiperSlide>
        </Swiper>
        <Caption>Handling user management, resources, and cloud infrastructure</Caption>
      </TabPanel>
    </DemoSectionWrapper>
  );
};

export default DemoSection;
