import React from 'react';
import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars > number ? (
          <BsStarFill />
        ) : stars > index ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <Wrapper>
      <div>{tempStars}</div>
      <p>({reviews})</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  span {
    color: #ffb900;
    font-size: 1.1rem;
    margin-right: 0.3rem;
  }
  div {
    margin-right: 0.5rem;
  }
  margin-bottom: 0.5rem;
  @media screen and (max-width: 990px) {
    margin: 0.15rem 0;
    span {
      font-size: 0.8rem;
      margin-right: 0.1rem;
    }
    p {
      font-size: 0.7rem;
    }
  }
`;
export default Stars;
