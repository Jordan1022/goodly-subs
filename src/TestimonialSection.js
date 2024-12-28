// TestimonialSection.js
import React, { useState } from 'react';
import styled from 'styled-components';

const TestimonialsContainer = styled.div`
  position: relative;
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 700px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 100px;
`;

const TestimonialWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  cursor: pointer;
  width: 90%;
  max-width: 800px;
  transform: translateY(${props => props.$offset}px) rotate(${props => props.$rotation}deg);
  z-index: ${props => props.$zIndex};

  &:hover {
    transform: translateY(${props => props.$offset - 20}px) rotate(${props => props.$rotation}deg) scale(1.02);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 30px;
    transform: translateY(${props => props.$offset * 0.8}px) rotate(${props => props.$rotation * 0.7}deg);
    
    &:hover {
      transform: translateY(${props => props.$offset * 0.8 - 15}px) rotate(${props => props.$rotation * 0.7}deg) scale(1.02);
    }
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding-right: 40px;

  @media (max-width: 900px) {
    padding-right: 0;
    padding-bottom: 20px;
  }
`;

const TestimonialTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 16px;
  color: #2d3748;
  font-weight: 600;
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #4a5568;
  margin: 0;
  font-style: italic;
`;

const TestimonialImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;

  @media (max-width: 900px) {
    width: 100px;
    height: 100px;
  }
`;

const TestimonialSection = () => {
  const [stackOrder, setStackOrder] = useState([0, 1]);

  const testimonials = [
    {
      title: "From J.A. Studio:",
      text: `"Why didn't I hire Goodly Development sooner? I should have, because it would have saved me needless frustration and stress. Being a small business owner I can't do it all, but technology is something that causes me exponential amounts of irritation. 
      Jordan and his team were helpful, knowledgeable, professional and diffused my stress with how efficiently they worked. A website issue that caused me 3+ days of work was fixed in less than 2 hours. Save yourself the trouble and hire Goodly today!"`,
      image: "christina.jpg",
      alt: "J.A. Studio Testimonial"
    },
    {
      title: "From The Nelson Group:",
      text: `"Goodly Development has been a lifesaver!! Jordan and the team are so responsive, knowledgeable, kind and knew what I needed to systematize our processes and make our business work more efficiently. Even when I didn't know how to articulate what we needed! We cannot recommend them highly enough!"`,
      image: "Jenn.jpg",
      alt: "The Nelson Group Testimonial"
    }
  ];

  const bringToTop = (index) => {
    setStackOrder(prev => {
      const newOrder = prev.filter(i => i !== index);
      return [index, ...newOrder];
    });
  };

  const getCardStyles = (index) => {
    const stackPosition = stackOrder.indexOf(index);
    return {
      $zIndex: testimonials.length - stackPosition,
      $offset: stackPosition * 80,
      $rotation: stackPosition * 1.5 - 1.5,
    };
  };

  return (
    <TestimonialsContainer id="testimony">
      {testimonials.map((testimonial, index) => (
        <TestimonialWrapper
          key={index}
          onClick={() => bringToTop(index)}
          {...getCardStyles(index)}
        >
          <ContentWrapper>
            <TestimonialTitle>{testimonial.title}</TestimonialTitle>
            <TestimonialText>{testimonial.text}</TestimonialText>
          </ContentWrapper>
          <TestimonialImage src={testimonial.image} alt={testimonial.alt} />
        </TestimonialWrapper>
      ))}
    </TestimonialsContainer>
  );
};

export default TestimonialSection;
