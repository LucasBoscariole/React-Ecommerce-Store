import React from 'react';
import styled from 'styled-components';
import AmountButtons from './AmountButtons';
import { formatPrice } from '../../data/FeaturedProducts';
import { useCartContext } from '../../reducer/cart_context';
import { FaTrash } from 'react-icons/fa';

const CartProduct = ({ id, title, image, mainSize, amount, price }) => {
  const { toggleAmount, removeItem } = useCartContext();
  const increase = () => {
    toggleAmount(id, 'inc');
  };
  const decrease = () => {
    toggleAmount(id, 'dec');
  };
  if (!mainSize) {
    mainSize = 'Unique';
  }
  return (
    <Wrapper>
      <img src={image} alt={title} />
      <Container>
        <h2>{title}</h2>
        <div className='flex'>
          <h3>Size : </h3>
          {mainSize === 'Unique' ? (
            <h3> {mainSize}</h3>
          ) : (
            <div className='size'>{mainSize}</div>
          )}
        </div>
        <h1>Price : {formatPrice(price)}</h1>
      </Container>
      <ContainerAmount>
        <AmountButtons
          increase={increase}
          decrease={decrease}
          amount={amount}
          className='toggle'
        />
        <FaTrash onClick={() => removeItem(id)} className='trash' />
      </ContainerAmount>
    </Wrapper>
  );
};

export default CartProduct;

const Wrapper = styled.article`
  width: 70%;
  height: 18vh;
  background: var(--grey);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.75rem auto;
  img {
    width: 20%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    img {
      width: 35%;
    }
  }
`;

const Container = styled.div`
  display: block;
  width: 38%;
  .flex {
    display: flex;
    margin: 1rem 0;
    align-items: center;
    h3 {
      font-weight: 400;
      &:last-child {
        margin-left: 0.5rem;
      }
    }
  }
  .size {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: var(--grey-darker);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin-left: 0.5rem;
  }
  @media screen and (max-width: 768px) {
    width: 32%;
    .flex {
      margin: 0.75rem 0;
    }
    .size {
      width: 22px;
      height: 22px;
      font-size: 0.8rem;
    }
    h2 {
      font-size: 1rem;
    }
    h3 {
      font-size: 0.8rem;
    }
    h1 {
      font-size: 1rem;
    }
  }
`;

const ContainerAmount = styled.div`
  width: 38%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .trash {
    font-size: 1.5rem;
    color: red;
    cursor: pointer;
  }
  h2 {
    font-size: 1.8rem;
    margin-bottom: 0;
  }
  @media screen and (max-width: 768px) {
    width: 30%;
    flex-direction: column;
    h2 {
      font-size: 1.4rem;
      margin-bottom: 0;
    }
  }
`;
