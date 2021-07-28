import React from 'react';
import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
const Stars = ({ stars, reviews, trueReviews }) => {
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
    <Wrapper trueReviews={trueReviews}>
      <div>{tempStars}</div>
      {trueReviews ? <h5>({reviews}) reviews</h5> : <p>({reviews})</p>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  margin: ${(trueReviews) => (true ? '0' : '0.5rem 0')};
  span {
    color: #ffb900;
    font-size: 1.1rem;
    margin-right: 0.3rem;
  }
  div {
    margin-right: 0.5rem;
  }
  p {
    margin: 0;
  }
  h5 {
    color: var(--grey-darker);
    margin: 0;
    text-transform: capitalize;
    letter-spacing: 1px;
    font-weight: 400;
  }
  @media screen and (max-width: 990px) {
    margin: ${(trueReviews) => (true ? '0' : '0.15rem 0')};
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
