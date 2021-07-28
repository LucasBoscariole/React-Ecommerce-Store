import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Gallery from '../components/SingleProduct.js/Gallery';
import { ProductsData } from '../data/ProductsData';
import Info from '../components/SingleProduct.js/Info';
import CarouselSlider from '../components/SingleProduct.js/Carousel';

const SingleProduct = () => {
  const { id } = useParams();
  return (
    <>
      {ProductsData.map((item) => {
        if (item.id === id) {
          return (
            <section key={item.id}>
              <Wrapper>
                <Container>
                  <Gallery images={item.images} />
                </Container>
                <Container>
                  <Info id={id} />
                </Container>
              </Wrapper>
              <CarouselSlider category={item.category} />
            </section>
          );
        }
      })}
    </>
  );
};

export default SingleProduct;

const Wrapper = styled.article`
  width: 90%;
  min-height: 75vh;
  margin: 70px auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 49%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
