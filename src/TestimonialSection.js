// TestimonialSection.js
import React from 'react';
import styled from 'styled-components';

const TestimonialWrapper = styled.div`
  display: flex;
  align-items: center;
  /* Your testimonial section styles here */
  background-color: #f9f9f9; /* Light gray background color */
  padding: 40px;
  border-radius: 8px;
  margin-bottom: 40px;
  margin-top: 140px;
  @media (max-width: 900px) {
    flex-direction: column; /* Change to column layout on smaller screens */
    padding: 20px; /* Reduce padding on smaller screens */
    /* Add any other styles you want to change for smaller screens */
  }

`;

const TestimonialTitle = styled.h2`
  /* Your testimonial title styles here */
  font-size: 2rem;
  margin-bottom: 20px;
  color: #000; /* Dark green font color */
  display: block;
`;

const TestimonialText = styled.p`
  /* Your testimonial text styles here */
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333; /* Dark text color */
  margin-right: 20px;
`;

const TestimonialImage = styled.img`
  /* Your testimonial image styles here */
  width: 150px;
  border-radius: 8px; /* Regular border radius for a rectangular image */
  object-fit: cover; /* Ensure the image maintains its aspect ratio and covers the container */
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
`;

const TestimonialSection = () => {
  const testimonialText = `"Why didn't I hire Goodly Development sooner? I should have, because it would have saved me needless frustration and stress. Being a small business owner I can't do it all, but technology is something that causes me exponential amounts of irritation. 
  Jordan and his team were helpful, knowledgeable, professional and diffused my stress with how efficiently they worked. A website issue that caused me 3+ days of work was fixed in less than 2 hours. Save yourself the trouble and hire Goodly today!"`;
  const testimonialText2 = `"Goodly Development has been a lifesaver!! Jordan and the team are so responsive, knowledgeable, kind and knew what I needed to systematize our processes and make our business work more efficiently. Even when I didn't know how to articulate what we needed! We cannot recommend them highly enough!" 
  `;

  return (
    <div>
      <TestimonialWrapper id="testimony">
        <div style={{ display: 'block' }}>
          <TestimonialTitle>From J.A. Studio:</TestimonialTitle>
          <TestimonialText>{testimonialText}</TestimonialText>
        </div>
        <TestimonialImage src="christina.jpg" alt="Testimonial" />
      </TestimonialWrapper>
      <TestimonialWrapper>
        <div style={{ display: 'block' }}>
          <TestimonialTitle>From The Nelson Group:</TestimonialTitle>
          <TestimonialText>{testimonialText2}</TestimonialText>
        </div>
        <TestimonialImage src="Jenn.jpg" alt="Testimonial" />
      </TestimonialWrapper>
    </div>
  );
};

export default TestimonialSection;
