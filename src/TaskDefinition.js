import React from 'react';
import styled from 'styled-components';
import { FaCheck, FaTimes } from 'react-icons/fa';

const TaskWrapper = styled.div`
  max-width: 1200px;
  margin: 100px auto;
  padding: 60px 20px;
  background: linear-gradient(to bottom, rgba(244, 200, 95, 0.05), rgba(244, 200, 95, 0.02));
  border-radius: 20px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #F4C85F;
  text-align: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: #fff;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ExamplesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin: 3rem 0;
`;

const ExampleCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 25px;
  border-radius: 12px;
  border: 1px solid rgba(244, 200, 95, 0.1);

  h3 {
    color: #F4C85F;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    color: #fff;
    margin-bottom: 12px;
    padding-left: 20px;
    position: relative;
    line-height: 1.5;
    font-size: 1.1rem;

    &:before {
      content: "•";
      color: #F4C85F;
      position: absolute;
      left: 0;
    }
  }
`;

const NotATask = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 12px;
  margin: 3rem 0;
  border: 1px solid rgba(244, 200, 95, 0.1);

  h3 {
    color: #F4C85F;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    color: #fff;
    margin-bottom: 12px;
    padding-left: 25px;
    position: relative;
    line-height: 1.5;

    &:before {
      content: "×";
      color: #F4C85F;
      position: absolute;
      left: 0;
      font-size: 1.2rem;
    }
  }
`;

const HowItWorks = styled.div`
  margin-top: 4rem;

  h3 {
    color: #F4C85F;
    margin-bottom: 2rem;
    font-size: 1.3rem;
    text-align: center;
  }
`;

const Steps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const Step = styled.div`
  text-align: center;
  padding: 20px;

  .step-number {
    width: 40px;
    height: 40px;
    background: #F4C85F;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    font-weight: bold;
    color: #000;
  }

  p {
    color: #fff;
    line-height: 1.5;
  }
`;

const TaskDefinition = () => {
  return (
    <TaskWrapper>
      <Title>What's a Task?</Title>
      <Description>
        A task is a standalone request that we can complete and deliver within your subscription's timeline, 
        typically within 48 hours (depending on your plan). Each task is designed to address a specific need, 
        solve a single problem, or deliver one focused result.
      </Description>

      <Title style={{ fontSize: '1.8rem' }}>Examples of Tasks We Handle:</Title>
      <ExamplesGrid>
        <ExampleCard>
          <h3><FaCheck size={16} /> Integrations</h3>
          <ul>
            <li>Connect my Salesforce account to my email marketing platform for automated campaigns.</li>
          </ul>
        </ExampleCard>

        <ExampleCard>
          <h3><FaCheck size={16} /> Automations</h3>
          <ul>
            <li>Set up a workflow to notify my team in Slack whenever a new lead comes in.</li>
          </ul>
        </ExampleCard>

        <ExampleCard>
          <h3><FaCheck size={16} /> Web Development</h3>
          <ul>
            <li>Fix the responsive design issue on my checkout page.</li>
          </ul>
        </ExampleCard>

        <ExampleCard>
          <h3><FaCheck size={16} /> Technology Management</h3>
          <ul>
            <li>Audit my server setup and provide recommendations for optimization.</li>
          </ul>
        </ExampleCard>
      </ExamplesGrid>

      <NotATask>
        <h3><FaTimes size={16} /> What's Not a Task?</h3>
        <p style={{ color: '#fff', marginBottom: '1rem' }}>
          Some requests are too large to fit into a single task. For example:
        </p>
        <ul>
          <li>Building an entire website or app from scratch.</li>
          <li>Setting up an end-to-end CRM system with all custom workflows.</li>
        </ul>
        <p style={{ color: '#fff', marginTop: '1rem' }}>
          For these larger projects, we'll work with you to break the request into multiple actionable tasks that fit within our system.
        </p>
      </NotATask>

      <HowItWorks>
        <h3>How It Works:</h3>
        <Steps>
          <Step>
            <div className="step-number">1</div>
            <p>Submit Your Task: Add one task to your queue at a time through our portal.</p>
          </Step>
          <Step>
            <div className="step-number">2</div>
            <p>We Deliver: We'll complete your task in the timeframe indicated by your plan—no delays, no hassle.</p>
          </Step>
          <Step>
            <div className="step-number">3</div>
            <p>Next Up: Once a task is complete, the next one in your queue begins.</p>
          </Step>
        </Steps>
      </HowItWorks>
    </TaskWrapper>
  );
};

export default TaskDefinition; 