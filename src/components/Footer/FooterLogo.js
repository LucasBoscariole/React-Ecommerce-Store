import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterLogo = () => {
  return (
    <Wrapper>
      <LinkTo to='/'>COLD</LinkTo>
      <p>We create possibilities for the fashion world.</p>
      <h4>be fashion</h4>
    </Wrapper>
  );
};

export default FooterLogo;

const Wrapper = styled.div`
  width: 20%;
  display: block;
  p {
    color: var(--grey);
    margin: 0.5rem 0;
  }
  h4 {
    font-weight: bolder;
    color: #fff;
    text-transform: uppercase;
    margin-top: 0.75rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 1rem 0;
  }
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  font-style: italic;
  font-size: 3rem;
  color: #fff;
`;
