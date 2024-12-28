import React from 'react';
import styled from 'styled-components';

const GoodlyAboutWrapper = styled.div`
    padding: 60px 20px;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    
    @media (min-width: 768px) {
        margin-top: 80px;
        padding: 80px 40px;
    }
`;

const Title = styled.h2`
    font-size: 2.5rem;
    color: #2d3748;
    margin-bottom: 1.5rem;
    font-weight: 700;
    
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const Description = styled.p`
    font-size: 1.25rem;
    line-height: 1.7;
    color: #4a5568;
    margin-bottom: 2rem;
    
    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
`;

const HighlightedText = styled.span`
    background: linear-gradient(120deg, #F4C85F 0%, #F4C85F 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.4em;
    background-position: 0 88%;
    font-weight: 600;
    padding: 0 4px;
    transition: background-size 0.25s ease-in;
    
    &:hover {
        background-size: 100% 100%;
    }
`;

const ValueProposition = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-top: 3rem;
`;

const Value = styled.div`
    flex: 1;
    min-width: 250px;
    max-width: 350px;
    padding: 1.5rem;
    border-radius: 12px;
    background: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease;

    &:hover {
        transform: translateY(-5px);
    }

    h3 {
        color: #2d3748;
        margin-bottom: 1rem;
        font-size: 1.2rem;
        font-weight: 600;
    }

    p {
        color: #4a5568;
        font-size: 1rem;
        line-height: 1.5;
    }
`;

const GoodlyAbout = () => {
    return (
        <GoodlyAboutWrapper>
            <Title>Why Goodly?</Title>
            <Description>
                We chose our name from an old English word meaning <HighlightedText>of exceptional quality</HighlightedText> and <HighlightedText>abundance</HighlightedText>. 
                It perfectly captures what we deliver to our clients: abundant value through exceptional quality work.
            </Description>
            <ValueProposition>
                <Value>
                    <h3>Quality First</h3>
                    <p>We believe in doing things right the first time, delivering solutions that are built to last and grow with your business.</p>
                </Value>
                <Value>
                    <h3>Efficiency Driven</h3>
                    <p>Our experienced team turns complex technical challenges into streamlined solutions that save you time and reduce stress.</p>
                </Value>
            </ValueProposition>
        </GoodlyAboutWrapper>
    );
};

export default GoodlyAbout;