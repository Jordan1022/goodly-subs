import React from 'react';
import styled from 'styled-components';
import { FaCheck, FaTimes } from 'react-icons/fa';

const TaskWrapper = styled.div`
  max-width: 1200px;
  margin: 100px auto;
  padding: 60px 20px;
  background: linear-gradient(to bottom, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
  border: 1px solid var(--border);
  border-radius: 20px;
  box-shadow: var(--shadow-1);
`;

const Title = styled.h2`
  font-size: 2.2rem;
  color: var(--color-text);
  text-align: center;
  margin-bottom: 1.4rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--color-muted);
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2.4rem;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

const ExamplesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin: 2.2rem 0;
`;

const ExampleCard = styled.div`
  background: var(--card-bg);
  padding: 25px;
  border-radius: 12px;
  border: 1px solid var(--border);

  h3 {
    color: var(--color-text);
    margin-bottom: 1rem;
    font-size: 1.2rem;
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
    color: var(--color-muted);
    margin-bottom: 12px;
    padding-left: 20px;
    position: relative;
    line-height: 1.6;
    font-size: 1rem;

    &:before {
      content: "•";
      color: var(--color-gold);
      position: absolute;
      left: 0;
    }
  }
`;

const NotATask = styled.div`
  background: var(--card-bg);
  padding: 30px;
  border-radius: 12px;
  margin: 2.2rem 0;
  border: 1px solid var(--border);

  h3 {
    color: var(--color-text);
    margin-bottom: 1rem;
    font-size: 1.2rem;
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
    color: var(--color-muted);
    margin-bottom: 12px;
    padding-left: 25px;
    position: relative;
    line-height: 1.6;

    &:before {
      content: "×";
      color: var(--color-gold);
      position: absolute;
      left: 0;
      font-size: 1.1rem;
    }
  }
`;

const HowItWorks = styled.div`
  margin-top: 3rem;

  h3 {
    color: var(--color-text);
    margin-bottom: 1.6rem;
    font-size: 1.2rem;
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
    background: var(--color-gold);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    font-weight: bold;
    color: #000;
  }

  p {
    color: var(--color-muted);
    line-height: 1.6;
    margin: 0;
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

      <Title style={{ fontSize: '1.6rem', marginTop: '1rem' }}>Examples of Tasks We Handle:</Title>
      <ExamplesGrid>
        <ExampleCard>
          <h3><FaCheck size={16} color="var(--color-gold)" /> Integrations</h3>
          <ul>
            <li>Connect my Salesforce account to my email marketing platform for automated campaigns.</li>
          </ul>
        </ExampleCard>

        <ExampleCard>
          <h3><FaCheck size={16} color="var(--color-gold)" /> Automations</h3>
          <ul>
            <li>Set up a workflow to notify my team in Slack whenever a new lead comes in.</li>
          </ul>
        </ExampleCard>

        <ExampleCard>
          <h3><FaCheck size={16} color="var(--color-gold)" /> Web Development</h3>
          <ul>
            <li>Fix the responsive design issue on my checkout page.</li>
          </ul>
        </ExampleCard>

        <ExampleCard>
          <h3><FaCheck size={16} color="var(--color-gold)" /> Technology Management</h3>
          <ul>
            <li>Audit my server setup and provide recommendations for optimization.</li>
          </ul>
        </ExampleCard>
      </ExamplesGrid>

      <NotATask>
        <h3><FaTimes size={16} color="var(--color-gold)" /> What's Not a Task?</h3>
        <p style={{ color: 'var(--color-muted)', marginBottom: '1rem' }}>
          Some requests are too large to fit into a single task. For example:
        </p>
        <ul>
          <li>Building an entire website or app from scratch.</li>
          <li>Setting up an end-to-end CRM system with all custom workflows.</li>
        </ul>
        <p style={{ color: 'var(--color-muted)', marginTop: '1rem' }}>
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