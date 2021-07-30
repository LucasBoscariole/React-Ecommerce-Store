import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import image from '../images/signin.jpg';
import { useFilterContext } from '../reducer/context';

const SignIn = () => {
  const { signIn } = useFilterContext();
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
          <Link to='/'>Log In</Link>
          <div className='or'>Or</div>
          <Link to='/' className='sign'>
            Sign In
          </Link>
          <hr />
          <Link to='/' className='demo' onClick={() => signIn()}>
            Demo
          </Link>
        </Container>
      </SignInContainer>
    </Wrapper>
  );
};

export default SignIn;

const Wrapper = styled.section`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    height: calc(100vh - 70px);
    z-index: -1;
    object-fit: cover;
  }
`;

const SignInContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  min-height: 60vh;
  background: var(--grey);
  border-radius: 10px;
  margin-top: 100px;
  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 100px auto 0;
  }
`;

const Container = styled.div`
  display: grid;
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
    margin-bottom: 1rem;
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
  a {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--main-color);
    color: #fff;
    border-radius: 5px;
    border: none;
    outline: none;
    letter-spacing: 1px;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.8rem;
  }
  .or {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sign {
    margin-bottom: 1rem;
  }
  .demo {
    margin: 1rem 0;
    background: var(--second-color);
  }
  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;
