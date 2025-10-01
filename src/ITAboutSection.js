import React from 'react';
import styled from 'styled-components';

const ITAboutWrapper = styled.section`
    padding: 60px 20px;
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;

    @media (min-width: 768px) {
        margin-top: 80px;
        padding: 80px 40px;
    }
`;

const Title = styled.h2`
    font-size: clamp(2rem, 3vw, 2.6rem);
    color: var(--color-text);
    margin-bottom: 1rem;
    font-weight: 700;
`;

const Description = styled.p`
    font-size: 1.15rem;
    line-height: 1.8;
    color: var(--color-muted);
    margin-bottom: 2rem;
`;

const HighlightedText = styled.span`
    background: linear-gradient(120deg, rgba(244,200,95,0.35) 0%, rgba(244,200,95,0.35) 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.45em;
    background-position: 0 88%;
    font-weight: 600;
    padding: 0 4px;
`;

const ValueProposition = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 2.2rem;
`;

const Value = styled.div`
    flex: 1;
    min-width: 260px;
    max-width: 420px;
    padding: 1.6rem;
    border-radius: var(--radius-md);
    background: var(--card-bg);
    border: 1px solid var(--border);
    box-shadow: var(--shadow-1);
    text-align: left;
    transition: transform 0.2s ease;

    &:hover {
        transform: translateY(-4px);
    }

    h3 {
        color: var(--color-text);
        margin-bottom: 0.6rem;
        font-size: 1.2rem;
        font-weight: 600;
    }

    p {
        color: var(--color-muted);
        font-size: 1rem;
        line-height: 1.6;
        margin: 0;
    }
`;

const ITAboutSection = () => {
    return (
        <ITAboutWrapper>
            <Title>Why Choose Our IT Services?</Title>
            <Description>
                We provide <HighlightedText>enterprise-grade</HighlightedText> IT solutions with <HighlightedText>small business care</HighlightedText>. 
                Our managed services approach ensures your technology infrastructure supports your business growth, not hinders it.
            </Description>
            <ValueProposition>
                <Value>
                    <h3>Proactive Monitoring</h3>
                    <p>24/7 system monitoring and maintenance prevents issues before they impact your business operations and productivity.</p>
                </Value>
                <Value>
                    <h3>Scalable Solutions</h3>
                    <p>Our IT infrastructure grows with your business, from startup to SMBs, with seamless transitions and minimal disruption.</p>
                </Value>
            </ValueProposition>
        </ITAboutWrapper>
    );
};

export default ITAboutSection;
