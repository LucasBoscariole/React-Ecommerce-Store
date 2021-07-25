import React from 'react';
import OurHistory from '../components/About/OurHistory';
import OurMission from '../components/About/OurMission';
import Hero from '../components/Hero';
import Image from '../images/imageHero1.jpg';

const About = () => {
  return (
    <>
      <Hero image={Image} title={'About Us'} />
      <OurHistory />
      <OurMission />
    </>
  );
};

export default About;
