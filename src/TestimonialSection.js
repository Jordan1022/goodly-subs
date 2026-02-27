// TestimonialSection.js
import React from 'react';
import styled from 'styled-components';

const TestimonialsWrapper = styled.section`
  padding: 80px 0;
`;

const SectionHeader = styled.div`
  margin-bottom: 48px;
`;

const Eyebrow = styled.p`
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin: 0 0 16px 0;
  opacity: 0.85;
`;

const Title = styled.h2`
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  color: var(--color-text);
  margin: 0;
  font-weight: 600;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  padding: 36px;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  gap: 24px;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.14);
  }
`;

const QuoteMark = styled.span`
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 4rem;
  line-height: 1;
  color: var(--color-gold);
  opacity: 0.6;
  display: block;
  margin-bottom: -8px;
`;

const QuoteText = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-text);
  margin: 0;
  flex: 1;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding-top: 20px;
  border-top: 1px solid var(--border);
`;

const AuthorPhoto = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  filter: grayscale(20%);
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 2px 0;
`;

const AuthorCompany = styled.p`
  font-size: 0.82rem;
  color: var(--color-muted);
  margin: 0;
`;

const testimonials = [
  {
    quote: `Why didn't I hire Goodly Development sooner? I should have, because it would have saved me needless frustration and stress. Being a small business owner I can't do it all, but technology causes me exponential amounts of irritation. Jordan and his team were helpful, knowledgeable, professional and diffused my stress with how efficiently they worked. A website issue that caused me 3+ days of work was fixed in less than 2 hours. Save yourself the trouble and hire Goodly today!`,
    name: "Christina",
    company: "J.A. Studio",
    image: "christina.jpg",
  },
  {
    quote: `Goodly Development has been a lifesaver!! Jordan and the team are so responsive, knowledgeable, kind and knew what I needed to systematize our processes and make our business work more efficiently. Even when I didn't know how to articulate what we needed! We cannot recommend them highly enough!`,
    name: "Jennifer",
    company: "The Nelson Group",
    image: "Jenn.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <TestimonialsWrapper id="testimony">
      <SectionHeader>
        <Eyebrow>Client Stories</Eyebrow>
        <Title>What clients say</Title>
      </SectionHeader>

      <Grid>
        {testimonials.map((t, i) => (
          <Card key={i}>
            <div>
              <QuoteMark>"</QuoteMark>
              <QuoteText>{t.quote}</QuoteText>
            </div>
            <Author>
              <AuthorPhoto src={t.image} alt={t.name} />
              <AuthorInfo>
                <AuthorName>{t.name}</AuthorName>
                <AuthorCompany>{t.company}</AuthorCompany>
              </AuthorInfo>
            </Author>
          </Card>
        ))}
      </Grid>
    </TestimonialsWrapper>
  );
};

export default TestimonialSection;
