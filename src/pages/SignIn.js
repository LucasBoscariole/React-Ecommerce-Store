import React from 'react';
import styled from 'styled-components';
import image from '../images/signin.jpg';

const SignIn = () => {
  return (
    <Wrapper>
      <img src={image} alt='' />
      <SignInContainer>
        <Container>
          <h2>Sign In</h2>
          <input type='text' name='name' id='name' placeholder='Name' />
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Password'
          />
          <div className='remember'>
            <input
              type='checkbox'
              name='remember'
              id='remember'
              className='input'
            />
            <label htmlFor='remember'>Remember Me</label>
          </div>
          <button type='submit'>Log In</button>
          <div className='or'>Or</div>
          <button type='submit' className='demo'>
            Demo
          </button>
        </Container>
      </SignInContainer>
    </Wrapper>
  );
};

export default SignIn;

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  img {
    width: 60%;
    height: 100vh;
    object-fit: cover;
  }
  @media screen and (max-width: 768px) {
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: -1;
      object-fit: cover;
    }
  }
`;

const SignInContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  background: var(--grey);
  @media screen and (max-width: 768px) {
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const Container = styled.div`
  display: block;
  width: 55%;
  h2 {
    margin-bottom: 1rem;
  }
  input {
    width: 100%;
    height: 40px;
    border: 1px solid #fff;
    margin-bottom: 0.7rem;
    border-radius: 5px;
    padding-left: 1rem;
    &:focus {
      outline-color: var(--main-color);
    }
    &::placeholder {
      letter-spacing: 1px;
    }
  }
  .remember {
    display: flex;
    .input {
      width: 15px;
      height: 15px;
      cursor: pointer;
    }
    label {
      font-size: 0.9rem;
      margin-left: 0.5rem;
    }
  }
  button {
    width: 100%;
    height: 40px;
    background: var(--main-color);
    color: #fff;
    border-radius: 5px;
    border: none;
    outline: none;
    margin-top: 1rem;
    letter-spacing: 1px;
  }
  .or {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .demo {
    margin: 0;
    background: var(--second-color);
  }
  @media screen and (max-width: 768px) {
    width: 70%;
    h2,
    label,
    .or {
      color: #fff;
    }
  }
`;
