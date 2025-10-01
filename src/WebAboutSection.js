import React from 'react';
import styled from 'styled-components';

const WebAboutWrapper = styled.section`
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

const WebAboutSection = () => {
    return (
        <WebAboutWrapper>
            <Title>Why Choose Our Web Services?</Title>
            <Description>
                We create <HighlightedText>high-performance</HighlightedText> web experiences with <HighlightedText>modern tools</HighlightedText>. 
                From custom development to platform management, we ensure your web presence drives results and grows with your business.
            </Description>
            <ValueProposition>
                <Value>
                    <h3>Performance Optimized</h3>
                    <p>Lightning-fast websites with advanced caching, CDN optimization, and modern web technologies for superior user experience.</p>
                </Value>
                <Value>
                    <h3>Platform Expertise</h3>
                    <p>Deep knowledge across WordPress, Webflow, Cloudflare, and custom solutions to choose the right tool for your needs.</p>
                </Value>
            </ValueProposition>
        </WebAboutWrapper>
    );
};

export default WebAboutSection;
