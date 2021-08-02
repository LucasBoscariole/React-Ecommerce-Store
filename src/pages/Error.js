import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img from '../images/signin.jpg';

const Error = () => {
  return (
    <Wrapper>
      <img src={img} alt='error page' />
      <div className='black'></div>
      <Container>
        <h1>
          Ooops! Looks like the page you are looking for is out of fashion!
        </h1>
        <Link to='/'>Back Home</Link>
      </Container>
    </Wrapper>
  );
};

export default Error;

const Wrapper = styled.section`
  width: 100%;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: calc(85vh + 2rem);
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: -2;
  }
  .black {
    width: 100%;
    height: calc(85vh + 2rem);
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: -1;
  }
`;

const Container = styled.div`
  width: 60%;
  display: block;
  text-align: center;

  h1 {
    letter-spacing: 1.5px;
    color: #fff;
    margin-bottom: 2.5rem;
    font-size: 2rem;
    text-align: center;
  }
  a {
    padding: 1.5rem 2.4rem;
    background: var(--main-color);
    border: none;
    outline: none;
    border-radius: 5px;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    transition: 0.4s;
    &:hover {
      background: var(--second-color);
    }
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
