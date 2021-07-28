import React from 'react';
import styled from 'styled-components';
import { contactIconstData } from '../../data/ContactIconsData';

const Icons = () => {
  return (
    <Wrapper>
      {contactIconstData.map((item, index) => {
        return (
          <Container key={index}>
            <div className='icon-container'>{item.icon}</div>
            <div className='flex'>
              <h3>{item.title}</h3>
              <p>{item.desc1}</p>
              <p>{item.desc2}</p>
            </div>
          </Container>
        );
      })}
    </Wrapper>
  );
};

export default Icons;

const Wrapper = styled.article`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 821px) {
    width: 100%;
  }
`;

const Container = styled.div`
  min-width: 35vw;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--grey);
  border-radius: 10px;
  margin-top: 1rem;
  .icon-container {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      font-size: 3rem;
      color: var(--main-color);
    }
  }
  .flex {
    display: grid;
    width: 70%;
    h3,
    p {
      color: #000;
    }
  }
  @media (min-width: 901px) and (max-width: 1100px) {
    width: 40vw;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    height: 20vh;
    p {
      font-size: 0.9rem;
    }
  }
`;
