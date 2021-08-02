import React from 'react';
import styled from 'styled-components';
import Image from '../../images/signin.jpg';
import StripeCheckout from '../StripeCheckout';
import { useCartContext } from '../../reducer/cart_context';
import { Link } from 'react-router-dom';
import Hero from '../Hero';
const Checkout = () => {
  const { total_items } = useCartContext();
  return (
    <>
      <Hero image={Image} title={'Checkout'} />
      <Wrapper>
        {total_items < 1 ? (
          <Empty>
            <h1>Your card is empty!</h1>
            <br />
            <Link to='/shop'>fill it</Link>
          </Empty>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </>
  );
};

export default Checkout;

const Wrapper = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Empty = styled.section`
  width: 100%;
  height: 60vh;
  align-items: center;
  justify-content: center;
  display: flex;
  a {
    padding: 1rem 2rem;
    background: var(--main-color);
    margin-top: 3rem;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 5px;
  }
`;
