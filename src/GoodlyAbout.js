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

const GoodlyAbout = () => {
    return (
        <GoodlyAboutWrapper>
            <h2>Why Goodly?</h2>
            <p>It's an old timey word meaning `of good quality or abundant` which both has a ring to it but also is the ooutcome we offer to our clients.</p>
        </GoodlyAboutWrapper>
    );
};

export default GoodlyAbout;