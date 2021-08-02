import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useFilterContext } from '../../reducer/context';

const Links = () => {
  const { myUser, loginWithRedirect } = useFilterContext();

  return (
    <Wrapper>
      <LinkTo to='/shop'>keep shopping</LinkTo>
      {myUser ? (
        <LinkTo to='/checkout' background='true'>
          checkout
        </LinkTo>
      ) : (
        <LinkToButton type='button' onClick={loginWithRedirect}>
          log in
        </LinkToButton>
      )}
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
  border: none;
  outline: none;
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.5rem 1.2rem;
  }
`;

const LinkToButton = styled.button`
  padding: 1rem 1.75rem;
  background: var(--main-color);
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  outline: none;
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.8rem 1.5rem;
  }
`;
