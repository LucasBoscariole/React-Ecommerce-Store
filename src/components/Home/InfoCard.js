import React from 'react';
import styled from 'styled-components';
import { cardInfoData } from '../../data/CardsInfoData';
import { Link } from 'react-router-dom';
const InfoCard = () => {
  return (
    <Wrapper>
      <Container>
        {cardInfoData.map((item, index) => {
          return (
            <CardContainer key={index}>
              <img src={item.img} alt={item.alt} />
              <div className='black'></div>
              <Card to={item.path}>{item.title}</Card>
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
`;

const Card = styled(Link)`
  width: 175px;
  height: 50px;
  border: 1px solid #fff;
  background: #f7f7f7;
  color: var(--main-color);
  transition: 0.3s;
  z-index: 1;
  margin: auto 0;
  text-decoration: none;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: var(--main-color);
    color: #fff;
  }
  @media screen and (max-width: 768px) {
  }
`;
