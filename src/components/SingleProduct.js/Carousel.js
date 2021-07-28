import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductsData } from '../../data/ProductsData';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { formatPrice } from '../../data/FeaturedProducts';

const CarouselSlider = ({ category }) => {
  return (
    <Wrapper>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode
        className=''
        containerClass='container'
        dotListClass=''
        draggable
        focusOnSelect={false}
        infinite
        itemClass=''
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=''
        slidesToSlide={1}
        swipeable
      >
        {ProductsData.filter((item) => item.category === category)
          .map((item) => {
            return (
              <SliderContainerContent key={item.id}>
                <Link key={item.id} to={`/shop/:${item.id}`}>
                  <img src={item.img} alt={`${item.title}`} />
                  <h3>{item.title}</h3>
                  <h4>{formatPrice(item.price)}</h4>
                </Link>
              </SliderContainerContent>
            );
          })
          .slice(1, 7)}
      </Carousel>
    </Wrapper>
  );
};

export default CarouselSlider;

const Wrapper = styled.article`
  width: 80vw;
  margin: 1rem auto 2rem auto;
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

const SliderContainerContent = styled.div`
  width: 18vw;
  height: 35vh;
  background: var(--grey);
  text-decoration: none;
  color: var(--main-color);
  box-shadow: 0px 0px 19px -8px rgba(0, 0, 0, 1);
  img {
    width: 100%;
    height: 75%;
    object-fit: cover;
  }
  a {
    text-decoration: none;
    color: var(--main-color);
  }
  @media (min-width: 464px) and (max-width: 1023px) {
    width: 25vw;
  }
  @media screen and (max-width: 463px) {
    width: 45vw;
  }
`;

const FlexWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: start;
  h3 {
    font-size: 1rem;
    margin-left: 0.5rem;
  }
  @media screen and (max-width: 768px) {
  }
`;
