import React from 'react';
import FeaturedProduts from '../components/Home/FeaturedProduts';
import HeroContainer from '../components/Home/HeroContainer';
import IconsContainer from '../components/Home/IconsContainer';
import InfoCard from '../components/Home/InfoCard';
import Email from '../components/Home/Email';

const Home = () => {
  return (
    <>
      <HeroContainer />
      <IconsContainer />
      <InfoCard />
      <FeaturedProduts />
      <Email />
    </>
  );
};

export default Home;
