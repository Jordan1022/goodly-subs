import React, { useState } from 'react';
import styled from 'styled-components';

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
                    WeGive Website
                </Tab>

                <Tab
                    active={activeTab === 'tab2'}
                    onClick={() => setActiveTab('tab2')}
                >
                    Automation Screenshot
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
