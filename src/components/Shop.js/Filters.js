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
      <FiltersInfoContainer open={openFilters}></FiltersInfoContainer>
    </Container>
  );
};

export default Filters;

const Container = styled.section`
  width: 100%;
  min-height: 10vh;
  margin-top: 1rem;
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
`;

const FiltersInfoContainer = styled.div`
  width: 70%;
  transition: 0.2s;
  height: ${({ open }) => (open ? '30vh' : '0')};
  background: var(--second-color);
  margin: 1rem auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
`;
