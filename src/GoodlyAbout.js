import React from 'react';
import styled from 'styled-components';


const GoodlyAboutWrapper = styled.div`
    // Styles for the overall component
    margin-top: 50px;
    margin-bottom: 250px;
    @media (min-width: 768px) {
        margin-top: 120px;
    }
    `;

const HighlightedText = styled.span`
background-color: #F4C85F;
font-weight: bold;
max-width: 10%;
margin-right: 10px;
margin-left: 10px;
`;

const GoodlyAbout = () => {
    return (
        <GoodlyAboutWrapper>
            <h2>Why Goodly?</h2>
            <p>It's an old timey word meaning <HighlightedText>of good quality or abundant</HighlightedText> which has a nice ring to it but also is the outcome we offer to our clients.</p>
        </GoodlyAboutWrapper>
    );
};

export default GoodlyAbout;