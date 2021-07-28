import React, { useState } from 'react';
import styled from 'styled-components';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <h2>Get In Touch</h2>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name='textarea'
          id='textarea'
          placeholder='Message...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type='submit'>submit</button>
      </form>
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled.article`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    display: grid;
    width: 35vw;
    h2 {
      text-transform: capitalize;
      letter-spacing: 1px;
    }
    input {
      width: 100%;
      height: 50px;
      padding-left: 1rem;
      border: 1px solid var(--grey);
      color: #000;
      background: var(--grey);
      border-radius: 5px;
      margin-top: 1rem;
      &::placeholder {
        color: #000;
        letter-spacing: 1px;
      }
      &:focus {
        outline: #000;
      }
    }
    textarea {
      width: 100%;
      height: 100px;
      padding-left: 1rem;
      padding-top: 1rem;
      border: 1px solid var(--grey);
      color: #000;
      background: var(--grey);
      border-radius: 5px;
      margin: 1rem 0;

      &::placeholder {
        color: #000;
        letter-spacing: 1px;
      }
      &:focus {
        outline: #000;
      }
    }
    button {
      text-transform: uppercase;
      letter-spacing: 3px;
      color: #fff;
      border: 1px solid var(--main-color);
      background: var(--main-color);
      border-radius: 5px;
      transition: 0.4s;
      height: 50px;
      cursor: pointer;
      &:hover {
        background: var(--second-color);
      }
    }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    form {
      width: 100%;
    }
  }
`;
