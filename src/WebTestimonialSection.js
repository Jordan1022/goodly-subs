// WebTestimonialSection.js
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
    min-height: 680px;
    padding: 20px;
    padding-top: 40px;
  }

  @media (max-width: 768px) {
    min-height: auto;
    padding-top: 20px;
    display: block;
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
  margin: 0 auto;

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

  @media (max-width: 768px) {
    position: static;
    transform: none;
    margin-bottom: 16px;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 20px;
    width: 100%;
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

const WebTestimonialSection = () => {
  const [stackOrder, setStackOrder] = useState([0, 1]);

  const testimonials = [
    {
      title: "",
      text: `"Goodly Development transformed our client delivery process completely. Their expertise in WordPress and Webflow allowed us to take on bigger projects with confidence. The custom solutions they built increased our client satisfaction by 60%, and their Cloudflare optimizations made all our sites lightning fast. They're now our go-to development partner."`,
      image: "Jenn.jpg",
      alt: "Bloom Digital Agency Director"
    },
    {
      title: "",
      text: `"We needed a website that could showcase our portfolio beautifully while handling complex e-commerce functionality. Goodly Development delivered beyond our expectations with a custom solution that increased our online sales by 150% in just three months. Their ongoing maintenance and optimization keeps everything running perfectly."`,
      image: "tolu.jpg",
      alt: "Artisan Collective Founder"
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
    <TestimonialsContainer id="web-testimonials">
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

export default WebTestimonialSection;
