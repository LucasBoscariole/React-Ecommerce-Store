import React, { useState } from 'react';
import styled from 'styled-components';
import { BsFilter, BsSearch } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

const Filters = () => {
  const [openFilters, setOpenFilters] = useState(false);
  const handleOpenFilters = () => {
    return setOpenFilters(!openFilters);
  };
  return (
    <Container>
      <Wrapper>
        <TextContainer>
          <h3>All Products</h3>
          <h3>Women</h3>
          <h3>Men</h3>
          <h3>Acessories</h3>
        </TextContainer>
        <FiltersContainer open={openFilters}>
          <button onClick={handleOpenFilters} className='filter'>
            {openFilters ? <IoClose style={{ color: '#fff' }} /> : <BsFilter />}{' '}
            filters
          </button>
          <div>
            <input type='text' placeholder='Search' />
            <button type='submit'>
              <BsSearch />
            </button>
          </div>
        </FiltersContainer>
      </Wrapper>
      <FiltersInfoContainer open={openFilters}>
        <ShortBy>
          <h3>Short By</h3>
          <p>Popularity</p>
          <p>Newness</p>
          <p>Price: Low to High</p>
          <p>Price: High to Low</p>
        </ShortBy>
        <ShortBy>
          <h3>Category</h3>
          <p>All</p>
          <p>Woman</p>
          <p>Men</p>
          <p>Watches</p>
          <p>Sunglasses</p>
        </ShortBy>
        <ShortBy>
          <h3>Price</h3>
          <p>$0.00 - $50.00</p>
          <p>$50.00 - $100.00</p>
          <p>$100.00 - $150.00</p>
          <p>$200.00 - $200.00</p>
          <p>$200.00+</p>
        </ShortBy>
        <ShortBy >
          <h3>Brand</h3>
          <p>All</p>
          <p>Furia</p>
          <p>Astralis</p>
          <p>SK</p>
          <p>Immortals</p>
        </ShortBy>
      </FiltersInfoContainer>
    </Container>
  );
};

export default Filters;

const Container = styled.section`
  width: 100%;
  min-height: 10vh;
  margin-top: 2rem;
  display: block;
`;

const Wrapper = styled.article`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    cursor: pointer;
    font-weight: 400;
    &:first-child {
      font-weight: 600;
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const FiltersContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .filter {
    position: relative;
    transition: 0.4s;
    text-transform: capitalize;
    padding: 0 1.5rem;
    height: 40px;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    svg {
      color: #000;
      margin-right: 0.2rem;
      font-size: 1.2rem;
    }
    background: var(--grey);
    color: #000;
    display: flex;
    align-items: center;
    ${({ open }) =>
      open &&
      `  background: var(--second-color);
    color: #fff;
    display: flex;
    align-items: center;
     &::before {
      content: '';
      position: absolute;
      bottom: -13px;
      right: 50%;
      width: 15px;
      height: 15px;
      background: var(--second-color);
      clip-path: polygon(100% 0, 0 0, 50% 100%);
      transform: translateX(50%);
    }
`}
  }
  div {
    width: 55%;
    height: 40px;
    display: flex;
    position: relative;
    input {
      width: 100%;
      height: 100%;
      padding-left: 1rem;
      background: var(--grey);
      border: none;
      border-radius: 5px;
      border: none;
      outline: none;
      &::placeholder {
        color: #000;
      }
    }
    button {
      position: absolute;
      width: 40px;
      height: 40px;
      background: var(--second-color);
      border-radius: 5px;
      right: 0;
      border: none;
      outline: none;
      cursor: pointer;
      color: #fff;
      svg {
        font-size: 1rem;
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const FiltersInfoContainer = styled.div`
  width: 80%;
  transition: 0.3s;
  max-height: ${({ open }) => (open ? '60vh' : '0vh')};
  background: var(--grey);
  overflow: hidden;
  margin: 1rem auto;
  display: flex;
  align-items: start;
  justify-content: space-around;
  flex-wrap: wrap;
  border-radius: 15px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const ShortBy = styled.div`
  transition: 1s;
  display: block;
  width: 15%;
  margin-top: 1.5rem;
  h3 {
    color: #000;
    font-weight: 600;
    margin-bottom: 0.3rem;
    cursor: default;
  }
  p {
    color: #616161;
    font-weight: 400;
    margin: 0.5rem 0;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      color: #000;
    }
  }
  .active {
    color: red;
  }
  @media screen and (max-width: 768px) {
    width: 40%;
    h3 {
      font-size: 1rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;
