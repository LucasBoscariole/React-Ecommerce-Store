import React from 'react';
import { ProductsData } from '../../data/ProductsData';
import styled from 'styled-components';
import Stars from '../Home/Stars';
import { formatPrice } from '../../data/FeaturedProducts';
import AddToCard from './AddToCard';

const Info = ({ id }) => {
  return (
    <>
      {ProductsData.map((item) => {
        if (item.id === id) {
          return (
            <Wrapper key={item.id} size={item.size}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <p>
                <span>Brand :</span> {item.brand}
              </p>
              <p>
                <span>Category :</span> {item.category}
              </p>
              <Stars stars={item.stars} reviews={item.reviews} trueReviews />
              <h1>{formatPrice(item.price)}</h1>
              <AddToCard id={item.id} />
            </Wrapper>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

export default Info;

const Wrapper = styled.article`
  width: 100%;
  height: 100%;
  p {
    letter-spacing: 1px;
    text-transform: capitalize;
    margin: 1rem 0;
    color: var(--grey-darker);
    span {
      color: #000;
    }
  }
  h2 {
    margin: 1rem 0;
    letter-spacing: 1px;
    color: #000;
  }
  h1 {
    margin: 1rem 0 2rem;
  }
  .link {
    padding: 1rem 2rem;
    background: var(--main-color);
    color: #fff;
    text-transform: uppercase;
    border-radius: 3px;
    letter-spacing: 1px;
    transition: 0.4s;
    text-decoration: none;
    &:hover {
      background: var(--second-color);
    }
  }
  @media screen and (max-width: 768px) {
    p {
      margin: 0.5rem 0;
    }
    h1 {
      margin: 0.5rem 0 2rem;
    }
  }
`;
