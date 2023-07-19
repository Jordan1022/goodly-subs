import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  background-color: #f0f4e6; /* Neutral Green */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InputField = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #c7c7c7; /* Light Neutral Gold */
  border-radius: 4px;
  font-size: 1rem;
`;

const TextAreaField = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #c7c7c7; /* Light Neutral Gold */
  border-radius: 4px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  background-color: #6b705c; /* Neutral Gold */
  color: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #5d6353; /* Darker Neutral Gold */
  }
`;

const ContactForm = () => {
  return (
    <FormWrapper>
      <Heading>Contact Us</Heading>
      <Form>
        <InputField type="text" placeholder="Name" required />
        <InputField type="email" placeholder="Email" required />
        <TextAreaField
          rows="4"
          placeholder="Message"
          required
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </FormWrapper>
  );
};

export default ContactForm;
