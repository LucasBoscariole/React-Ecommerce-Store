import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProductsData } from '../../data/ProductsData';
import { useCartContext } from '../../reducer/cart_context';
import AmountButtons from '../Cart/AmountButtons';

const AddToCard = ({ id }) => {
  const { addToCart } = useCartContext();
  const product = ProductsData.filter((item) => item.id === id);
  let size = product.map((item) => item.size);
  size = size[0];
  const [mainSize, setMainSize] = useState(size[0]);
  const [amount, setAmount] = useState(1);
  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };
  return (
    <Wrapper>
      <div className='flex'>
        {size.map((item, index) => {
          return (
            <button
              key={index}
              className={`${mainSize === size[index] ? 'size active' : 'size'}`}
              onClick={() => setMainSize(size[index])}
            >
              {item.number}
            </button>
          );
        })}
      </div>
      <div className='btn-container'>
        <AmountButtons
          increase={increase}
          decrease={decrease}
          amount={amount}
        />

        <Link
          to='/cart'
          className='btn'
          onClick={() => addToCart(id, mainSize, amount, product)}
        >
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

export default AddToCard;

const Wrapper = styled.div`
  .flex {
    display: flex;
    width: 30%;
    justify-content: space-between;
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
    cursor: pointer;
    border: none;
    position: relative;
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .active {
    background: #000;
  }
  .btn-container {
    margin-top: 1rem;
  }
  .btn {
    margin-top: 1rem;
    width: 140px;
  }
  @media screen and (max-width: 768px) {
    .flex {
      width: 50%;
    }
  }
`;
