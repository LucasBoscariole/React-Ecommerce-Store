import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCartContext } from '../../reducer/cart_context';
import CartProduct from './CartProduct';
import Links from './Links';
import Totals from './Totals';

const CartItems = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper>
        <h2>Your cart is empty</h2>
        <br />
        <LinkTo to='/shop'>fill it</LinkTo>
      </Wrapper>
    );
  }
  return (
    <>
      <Container>
        {cart.map((item) => {
          return <CartProduct key={item.id} {...item} />;
        })}
      </Container>
      <Totals />
      <Links />
    </>
  );
};

export default CartItems;

const Wrapper = styled.div`
  width: 100%;
  height: calc(90vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  h2 {
    margin-bottom: 1rem;
  }
`;

const LinkTo = styled(Link)`
  color: #fff;
  text-transform: uppercase;
  background: var(--main-color);
  border: none;
  padding: 1rem 2rem;
  text-decoration: none;
`;

const Container = styled.div`
  display: block;
  width: 100%;
`;
