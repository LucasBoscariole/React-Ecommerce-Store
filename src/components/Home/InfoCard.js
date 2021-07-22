import React from 'react';
import styled from 'styled-components';
import { cardInfoData } from '../../data/CardsInfoData';

const InfoCard = () => {
  return (
    <Wrapper>
      <Container>
        {cardInfoData.map((item, index) => {
          return (
            <CardContainer key={index}>
              <img src={item.img} alt={item.alt} />
              <div className='black'></div>
              <Card>
                <h4>{item.header}</h4>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </Card>
            </CardContainer>
          );
        })}
      </Container>
    </Wrapper>
  );
};

export default InfoCard;

const Wrapper = styled.section`
  background: #dedede;
  width: 100%;
  height: 50vh;
  @media screen and (max-width: 768px) {
    height: 55vh;
  }
  @media screen and (max-width: 300px) {
    height: 70vh;
  }
`;
const Container = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

const CardContainer = styled.div`
  width: 30%;
  height: 40vh;
  position: relative;
  display: flex;
  align-content: center;
  justify-content: center;
  img {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .black {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.45);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 15vh;
  }
  @media screen and (max-width: 300px) {
    height: 20vh;
  }
`;

const Card = styled.div`
  width: 75%;
  display: block;
  margin: auto 0;
  z-index: 1;
  h4 {
    color: #f7f7f7;
    letter-spacing: -1.2px;
    margin-bottom: 0.5rem;
  }
  h2 {
    font-size: 2rem;
    color: #fff;
    letter-spacing: 1px;
    font-family: 'Cinzel', serif;
    margin-bottom: 0.5rem;
    font-weight: bolder;
  }
  p {
    width: 80%;
    color: #f7f7f7;
    letter-spacing: -0.5px;
  }
  @media screen and (max-width: 768px) {
    width: 95%;
    h4 {
      font-size: 0.7rem;
      margin-bottom: 0.3rem;
      font-weight: 400;
    }
    h2 {
      font-size: 1.2rem;
      margin-bottom: 0.3rem;
    }
    p {
      width: 100%;
      font-size: 0.65rem;
    }
  }
`;
