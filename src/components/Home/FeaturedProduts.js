import React from 'react';
import { FeaturedProdutsData, formatPrice } from '../../data/FeaturedProducts';
import styled from 'styled-components';
import Stars from './Stars';
import { Link } from 'react-router-dom';

const FeaturedProduts = () => {
  return (
    <Wrapper>
      <Text>Featured Products</Text>
      <div className='underline'></div>
      <Container>
        {FeaturedProdutsData.map((item, index) => {
          return (
            <FeaturedContainer key={index} to='/shop'>
              <img src={item.img} alt={`${item.title}`} />
              <FlexWrapper>
                <h2>{item.title}</h2>
                <Flex>
                  <Stars stars={item.star} reviews={item.reviews} />
                </Flex>
                <h3>{formatPrice(item.price)}</h3>
              </FlexWrapper>
            </FeaturedContainer>
          );
        })}
      </Container>
      <LinkTo to='/shop'>Shop Now</LinkTo>
    </Wrapper>
  );
};

export default FeaturedProduts;

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  .underline {
    width: 70%;
    height: 3px;
    background: #000;
    margin: 0 auto 3rem;
  }
`;

const Text = styled.h1`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  letter-spacing: 1px;
  color: #000;
  margin: 3rem auto 1rem auto;
  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const Container = styled.article`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FeaturedContainer = styled(Link)`
  @media screen and (min-width: 769px) {
    width: 30%;
    min-height: 45vh;
    color: var(--main-color);
    background: #f2f2f2;
    text-decoration: none;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.05);
    margin-bottom: 3rem;
    border-radius: 10px;
    img {
      width: 100%;
      height: 45vh;
      object-fit: cover;
    }
  }
  @media screen and (max-width: 768px) {
    width: 45%;
    color: var(--main-color);
    background: #f2f2f2;
    text-decoration: none;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
    margin-bottom: 1.5rem;
    min-height: 25vh;
    border-radius: 10px;
    img {
      width: 100%;
      height: 25vh;
      object-fit: cover;
    }
    &:last-child {
      display: none;
      visibility: hidden;
    }
  }
`;

const FlexWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 20%;
  display: block;
  text-align: start;
  h2 {
    font-weight: 600;
  }
  h3 {
    padding-bottom: 0.4rem;
  }
  @media screen and (max-width: 768px) {
    h2 {
      font-size: 1.2rem;
    }
    h3 {
      font-size: 0.9rem;
    }
  }
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 600;
  h3 {
    font-size: 1.05rem;
    font-weight: 600;
  }
`;

const LinkTo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 45px;
  background: var(--main-color);
  color: #fff;
  margin: 0.5rem auto 3rem;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    border: 1px solid var(--main-color);
    background: #fff;
    color: var(--main-color);
  }
`;
