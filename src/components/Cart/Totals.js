import React from 'react';
import { formatPrice } from '../../data/FeaturedProducts';
import { useCartContext } from '../../reducer/cart_context';
import styled from 'styled-components';

const Totals = () => {
  const { total_amount, total_items } = useCartContext();
  return (
    <Wrapper>
      <hr />
      <div className='flex'>
        <h3>Total cart items : {total_items}</h3>
        <h2>Total : {formatPrice(total_amount)}</h2>
      </div>
      <hr />
    </Wrapper>
  );
};

export default Totals;

const Wrapper = styled.article`
  width: 100%;
  display: block;
  h3 {
    color: var(--grey-darker);
  }
  h2 {
    color: #000;
  }
  .flex {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media screen and (max-width: 768px) {
    h3 {
      font-size: 0.9rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
`;
