import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import image from '../../images/about2.jpg';
const OurMission = () => {
  return (
    <Wrapper>
      <TextContainer>
        <h1>Our Mission</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis at
          voluptatibus delectus, quia in incidunt. Distinctio ab molestiae vero
          ea, et corporis, minus soluta iure architecto unde aspernatur. Quam,
          voluptatem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A veritatis
          commodi exercitationem, quia rem perferendis cupiditate maxime aliquam
          quas. Nemo itaque quos pariatur excepturi minima ullam a, explicabo
          quae rerum doloremque non est tempora iusto quis aliquid dignissimos
          aliquam enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt qui
          nulla quaerat modi aperiam. Nulla repellendus magni sit quia id
          consequuntur! Quisquam eligendi, beatae aut necessitatibus dolor illum
          saepe corporis commodi exercitationem iusto hic molestiae alias
          sapiente illo. Laudantium, adipisci.
        </p>
        <br />
        <LinkTo to='/contact'>Contact Us</LinkTo>
      </TextContainer>
      <ImageContainer>
        <img src={image} alt='' />
      </ImageContainer>
    </Wrapper>
  );
};

export default OurMission;

const Wrapper = styled.section`
  width: 90%;
  margin: 0 auto;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  @media screen and (max-width: 768px) {
    margin-top: 4vh;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  width: 50%;
  img {
    height: 50vh;
    width: 70%;
    object-fit: cover;
  }
  &::before {
    content: '';
    position: absolute;
    width: 30vw;
    height: 50vh;
    border: 5px solid var(--main-color);
    bottom: -5vh;
    left: 10vw;
    z-index: -1;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    img {
      width: 100%;
      height: 40vh;
      margin-bottom: 2vh;
    }
    &::before {
      position: absolute;
      width: 80vw;
      height: 20vh;
      border: 5px solid var(--main-color);
      bottom: -0.5vh;
      left: 4vw;
      z-index: -1;
    }
  }
`;
const TextContainer = styled.div`
  display: block;
  width: 50%;
  h1 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 0.5rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    h1 {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
    p {
      font-size: 1rem;
      text-align: justify;
    }
  }
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  background: var(--second-color);
  color: #fff;
  border: none;
  outline: none;
  text-transform: uppercase;
`;
