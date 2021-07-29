import React from 'react';
import styled from 'styled-components';
import CartItems from '../components/Cart/CartItems';

const Card = () => {
  return (
    <Wrapper>
      <CartItems />
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.section`
  display: block;
  width: 90%;
  margin: calc(70px + 1.75rem) auto 0;
`;
