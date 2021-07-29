import React from 'react';
import styled from 'styled-components';
import AmountButtons from './AmountButtons';
import { formatPrice } from '../../data/FeaturedProducts';
import { useCartContext } from '../../reducer/cart_context';

const CartProduct = ({ id, title, image, mainSize, amount, price }) => {
  const { toggleAmount, removeItem } = useCartContext();
  const increase = () => {
    toggleAmount(id, 'inc');
  };
  const decrease = () => {
    toggleAmount(id, 'dec');
  };
  return (
    <Wrapper>
      {title}
      <button onClick={() => removeItem(id)}>remove</button>
    </Wrapper>
  );
};

export default CartProduct;

const Wrapper = styled.article``;
