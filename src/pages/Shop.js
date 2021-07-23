import React from 'react';
import Hero from '../components/Hero';
import Filters from '../components/Shop.js/Filters';
import Image from '../images/imageHero2.jpg';

const Shop = () => {
  return (
    <>
      <Hero image={Image} title={'Shop'} />
      <Filters />
    </>
  );
};

export default Shop;
