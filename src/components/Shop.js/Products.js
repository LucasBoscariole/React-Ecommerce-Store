import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { formatPrice } from '../../data/FeaturedProducts';
import { useFilterContext } from '../../reducer/context';
import Stars from '../Home/Stars';

const Products = () => {
  const { filtered_products: products } = useFilterContext();

  return (
    <>
      <Wrapper>
        {products.length < 1 ? (
          <NoResults>
            <h3>Sorry, no products match your search criteria! </h3>
          </NoResults>
        ) : null}
        {products.map((item) => {
          return (
            <Container key={item.id} to={`/shop/${item.id}`}>
              <img src={item.img} alt={`${item.title}`} />
              <FlexWrapper>
                <h2>{item.title}</h2>
                <Flex>
                  <Stars stars={item.stars} reviews={item.reviews} />
                </Flex>
                <h3>{formatPrice(item.price)}</h3>
              </FlexWrapper>
            </Container>
          );
        })}
      </Wrapper>
      {/* <BtnContainer>
        <Button onClick={prevPage}>prev</Button>
        {products.map((item, index) => {
          return (
            <button
              key={index}
              className={`page-btn ${index === page ? 'active-btn' : null}`}
              onClick={() => handlePage(index)}
            >
              {index + 1}
            </button>
          );
        })}
        <Button onClick={nextPage}>next</Button>
      </BtnContainer> */}
    </>
  );
};

export default Products;

const Wrapper = styled.section`
  width: 90%;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const NoResults = styled.article`
  h3 {
    letter-spacing: 1px;
    text-transform: capitalize;
  }
`;

const Container = styled(Link)`
  @media screen and (min-width: 769px) {
    width: 30%;
    min-height: 40vh;
    color: var(--main-color);
    background: #f2f2f2;
    text-decoration: none;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
    margin-bottom: 3rem;
    img {
      width: 100%;
      height: 40vh;
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
    img {
      width: 100%;
      height: 25vh;
      object-fit: cover;
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

// const BtnContainer = styled.div`
//   .btn-container {
//     display: flex;
//     justify-content: center;
//     flex-wrap: wrap;
//   }
//   .page-btn {
//     width: 2rem;
//     height: 2rem;
//     background: var(--second-color);
//     border-color: transparent;
//     border-radius: 5px;
//     cursor: pointer;
//     margin: 0.5rem;
//     transition: 0.5s;
//   }
//   .active-btn {
//     background: var(--main-color);
//     color: #fff;
//   }
//   @media screen and (min-width: 775px) {
//     .btn-container {
//       margin: 0 auto;
//       max-width: 700px;
//     }
//   }
// `;

// const Button = styled.button`
//   background: transparent;
//   border-color: transparent;
//   font-weight: bold;
//   text-transform: capitalize;
//   letter-spacing: 1px;
//   margin: 0.5rem;
//   font-size: 1rem;
//   cursor: pointer;
// `;
