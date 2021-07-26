import React from 'react';
import styled from 'styled-components';
import image from '../../images/about1.jpg';
import { Link } from 'react-router-dom';

const OurHistory = () => {
  return (
    <Wrapper>
      <ImageContainer>
        <img src={image} alt='' />
      </ImageContainer>
      <TextContainer>
        <h1>Our History</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          autem nemo! Officiis quam suscipit quos, aut quibusdam praesentium
          repellendus sunt, provident rerum ullam incidunt dolorem. Dignissimos
          doloremque corporis tenetur vitae maiores iste quis impedit omnis.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id iusto eum
          ratione sapiente! Eum, excepturi totam animi explicabo quia, delectus
          earum at libero neque sunt perspiciatis recusandae quasi corrupti
          minima adipisci eos consectetur! Quasi vero ipsa iusto sunt, quia
          quisquam!
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
    </Wrapper>
  );
};

export default OurHistory;

const Wrapper = styled.section`
  width: 90%;
  margin: 0 auto;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    margin-top: 4vh;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  position: relative;
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
    right: 10vw;
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
      right: 5vw;
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
`;
