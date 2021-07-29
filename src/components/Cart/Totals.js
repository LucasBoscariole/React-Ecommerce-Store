import React from 'react';
import { formatPrice } from '../../data/FeaturedProducts';
import { useCartContext } from '../../reducer/cart_context';

const Totals = () => {
  const { total_amount } = useCartContext();
  return <h1>{formatPrice(total_amount)}</h1>;
};

export default Totals;
