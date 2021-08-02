import React from 'react';
import styled from 'styled-components';
import FooterInfo from '../components/Footer/FooterInfo';
import FooterLogo from '../components/Footer/FooterLogo';

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <FooterLogo />
        <FooterInfo />
      </Container>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  width: 100%;
  min-height: 40vh;
  background: var(--main-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  min-height: 25vh;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
