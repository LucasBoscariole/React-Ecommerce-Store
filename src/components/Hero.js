import React from 'react';
import styled from 'styled-components';

const Hero = ({ image, title }) => {
  return (
    <Wrapper image={image}>
      <Container>
        <Text>{title}</Text>
      </Container>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.header`
  margin-top: 70px;
  width: 100%;
  height: 25vh;
  background: url(${({ image }) => (image ? image : null)});
  background-color: rgba(0, 0, 0, 0.5);
  background-size: cover;
  background-blend-mode: multiply;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    height: 20vh;
  }
`;

const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const Text = styled.h1`
  color: #fff;
  font-weight: 600;
  letter-spacing: 1.5px;
`;
