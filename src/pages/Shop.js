import React from 'react';
import Hero from '../components/Hero';
import Filters from '../components/Shop.js/Filters';
import Products from '../components/Shop.js/Products';
import Image from '../images/imageHero2.jpg';

const Shop = () => {
  return (
    <>
      <Hero image={Image} title={'Shop'} />
      <Filters />
      <Products />
    </>
  );
};

export default Shop;
