import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../../reducer/context';

const Products = () => {
  const { filtered_products: products } = useFilterContext();
  return <Wrapper></Wrapper>;
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
`;
