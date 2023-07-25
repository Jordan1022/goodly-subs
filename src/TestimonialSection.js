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
  @media (max-width: 900px) {
    flex-direction: column; /* Change to column layout on smaller screens */
    padding: 20px; /* Reduce padding on smaller screens */
    /* Add any other styles you want to change for smaller screens */
  }

`;

const TestimonialText = styled.p`
  /* Your testimonial text styles here */
  font-size: 1.2rem;
  line-height: 1.6;
  font-style: italic;
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
  const testimonialText = `"We were impressed by the outstanding software management services provided by Goodly Development. 
  Their team of experts ensured that our systems were streamlined, efficient, and secure. 
  They went above and beyond to meet our specific requirements and exceeded our expectations. 
  Thanks to their expertise, our business processes have improved significantly, saving us time and resources. 
  We highly recommend Goodly Development to any business seeking reliable and top-notch software management."`;

  return (
    <TestimonialWrapper>
      <TestimonialText>{testimonialText}</TestimonialText>
      <TestimonialImage src="christina.jpg" alt="Testimonial" />
    </TestimonialWrapper>
  );
};

export default TestimonialSection;
