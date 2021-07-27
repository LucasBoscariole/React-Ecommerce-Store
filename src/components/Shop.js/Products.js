import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../../reducer/context';

const Products = () => {
  const { filtered_products: products } = useFilterContext();
  return (
    <Wrapper>
      {products.length < 1 ? <h3> no results </h3> : null}
      {products.map((item) => {
        return <img src={item.img} alt={item.title} key={item.id} />;
      })}
    </Wrapper>
  );
};

export default Products;

const Wrapper = styled.section`
  width: 90%;
  margin: 0 auto;
  min-height: 100vh;
  background: var(--grey);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  img {
    width: 45%;
    height: 40vh;
    object-fit: cover;
    margin-bottom: 1rem;
  }
`;
