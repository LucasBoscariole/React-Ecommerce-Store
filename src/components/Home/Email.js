import React, { useState } from 'react';
import styled from 'styled-components';
const Email = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };
  return (
    <Wrapper>
      <TextContainer>
        <div>
          <h2>
            Get Our
            <br />
            Latest Offers News
          </h2>
          <p>Subscribe news latter</p>
        </div>
      </TextContainer>
      <FormContainer onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type='submit'>send</button>
      </FormContainer>
    </Wrapper>
  );
};

export default Email;

const Wrapper = styled.section`
  width: 100%;
  height: 35vh;
  background: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  width: 35%;
  display: block;
  margin-left: auto;
  h2 {
    letter-spacing: 1px;
    color: var(--main-color);
    font-family: 'Cinzel', serif;
    font-size: 2.2rem;
    font-weight: bolder;
  }
  p {
    letter-spacing: 1px;
    color: var(--second-color);
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 1.5rem;
    h2 {
      font-size: 1.5rem;
    }
  }
`;

const FormContainer = styled.form`
  width: 40%;
  display: flex;
  margin-right: auto;
  input {
    padding-left: 1rem;
    width: 100%;
    height: 7vh;
    background: #fff;
    border-radius: 15px;
    border: 1px solid var(--main-color);
    outline: none;
    &:focus {
      border-color: var(--second-color);
    }
    &::placeholder {
      color: #000;
    }
  }
  button {
    height: 7vh;
    width: 30%;
    margin-left: -30%;
    border-radius: 15px;
    background: var(--main-color);
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: 1px solid var(--main-color);
    font-size: 0.9rem;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background: var(--second-color);
    }
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
    input,
    button {
      height: 6vh;
      border-radius: 10px;
    }
  }
`;
