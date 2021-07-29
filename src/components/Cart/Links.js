import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Links = () => {
  return (
    <Wrapper>
      <LinkTo to='/shop'>keep shopping</LinkTo>
      <LinkTo to='/signin' background='true'>
        checkout
      </LinkTo>
    </Wrapper>
  );
};

export default Links;

const Wrapper = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
`;

const LinkTo = styled(Link)`
  padding: 0.75rem 1.5rem;
  background: ${({ background }) =>
    background ? 'var(--main-color)' : 'var(--second-color)'};
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.5rem 1.2rem;
  }
`;
