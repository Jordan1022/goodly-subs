import React, { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import './App.css';

import 'swiper/css';


const DemoSectionWrapper = styled.div`
  // Styles for the overall component
  margin-top: 50px;
`;

const TabList = styled.div`
  // Styles for the tab list
`;

const Tab = styled.button`
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;  
  padding: 10px 20px;
  border: none;
  border-bottom: 2px solid transparent;
  background: none;
  cursor: pointer;
  color: #fff;

  &:hover {
    border-bottom: 2px solid #F4C85F;
  }
  
  ${props => props.active && `
    border-bottom: 2px solid #F4C85F;
    color: #F4C85F;
  `}
`;


const TabPanel = styled.div`
  // Styles for each tab panel
  // Hide inactive panels
  display: ${props => props.active ? 'block' : 'none'}; 
  margin-top: 30px;
  .swiper {
    width: 100%;
    height: 300px;
  }

  @media (max-width: 768px) {
    .swiper {
      height: 200px; 
    }
  }
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
                {/* Tab 1 content */}
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1} // Show one slide at a time
                    pagination={{ clickable: true }} // Add pagination dots
                    navigation // Add prev/next buttons
                    // Responsive breakpoints
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 }
                    }}
                    className='swiper-bullets'
                >
                    <SwiperSlide >
                        <a
                            href="weGive1.png"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="weGive1.png" alt='website1'
                                style={{ width: '100%', height: '300px', objectFit: 'cover' }} // Set image sizes 
                            />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide >
                        <a
                            href="weGive2.png"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                                src="weGive2.png" alt='website2' />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide >
                        <a
                            href="mn81.png"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                                src="mn81.png" alt='website3' />
                        </a>
                    </SwiperSlide>
                </Swiper>
            </TabPanel>

            <TabPanel active={activeTab === 'tab2'}>
                {/* Tab 2 content */}
            </TabPanel>

            <TabPanel active={activeTab === 'tab3'}>
                {/* Tab 3 content */}
            </TabPanel>

        </DemoSectionWrapper>
    );
}

export default DemoSection;
