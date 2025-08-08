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

  @media (max-width: 900px) {
    min-height: 800px;
    padding: 20px;
    padding-top: 40px;
  }
`;

const TestimonialWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  background: linear-gradient(180deg, rgba(13,16,24,0.86) 0%, rgba(13,16,24,0.80) 100%);
  padding: 40px;
  border-radius: 16px;
  box-shadow: var(--shadow-1);
  border: 1px solid var(--border);
  -webkit-backdrop-filter: blur(8px) saturate(120%);
  backdrop-filter: blur(8px) saturate(120%);
  transition: all 0.4s ease;
  cursor: pointer;
  width: 90%;
  max-width: 800px;
  transform: translateY(${props => props.$offset}px) rotate(${props => props.$rotation}deg);
  z-index: ${props => props.$zIndex};

  &:hover {
    transform: translateY(${props => {
      const moveDistance = props.$offset === 0 ? -30 : 30;
      return props.$offset + moveDistance;
    }}px) rotate(${props => props.$rotation}deg) scale(1.02);
    box-shadow: var(--shadow-2);
  }

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 25px;
    width: 85%;
    transform: translateY(${props => props.$offset * 0.9}px) rotate(${props => props.$rotation * 0.3}deg);
    
    &:hover {
      transform: translateY(${props => {
        const moveDistance = props.$offset === 0 ? -15 : 15;
        return (props.$offset * 0.9) + moveDistance;
      }}px) rotate(${props => props.$rotation * 0.3}deg) scale(1.01);
    }
  }

  @media (max-width: 480px) {
    padding: 20px;
    width: 92%;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding-right: 40px;

  @media (max-width: 900px) {
    padding-right: 0;
    padding-bottom: 15px;
    display: flex;
    flex-direction: column;
  }
`;

const TestimonialTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 12px;
  color: var(--color-text);
  font-weight: 600;

  @media (max-width: 900px) {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-muted);
  margin: 0;
  font-style: italic;

  @media (max-width: 900px) {
    font-size: 0.98rem;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const TestimonialImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--border);
  flex-shrink: 0;

  @media (max-width: 900px) {
    width: 80px;
    height: 80px;
    align-self: flex-end;
    margin-top: -40px;
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
      $offset: stackPosition * (window.innerWidth <= 900 ? 160 : 80),
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
