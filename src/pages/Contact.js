import React from 'react';
import Hero from '../components/Hero';
import Image from '../images/imageHero3.jpg';
import styled from 'styled-components';
import Form from '../components/Contact/Form';
import Icons from '../components/Contact/Icons';

const Contact = () => {
  return (
    <>
      <Hero image={Image} title={'Contact'} />
      <Wrapper>
        <Form />
        <Icons />
      </Wrapper>
    </>
  );
};

export default Contact;

const Wrapper = styled.section`
  width: 90%;
  min-height: 60vh;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
