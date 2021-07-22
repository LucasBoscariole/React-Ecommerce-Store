import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import { SliderData } from '../../data/SliderData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HeroContainer = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const length = SliderData.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentImage((c) => (c === length - 1 ? 0 : c + 1));
    };

    timeout.current = setTimeout(nextSlide, 5500);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [currentImage, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }
  return (
    <HeroSection>
      <HeroWrapper>
        {SliderData.map((item, index) => {
          return (
            <HeroSlide key={index}>
              {index === currentImage && (
                <HeroSlider>
                  <HeroImage src={item.image} alt={item.alt} />
                  <HeroContent>
                    <h3>{item.subtitle}</h3>
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                    <LinkTo to={item.path}>{item.label}</LinkTo>
                  </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}
        <SliderButtons>
          <PrevButton onClick={prevSlide} />
          <NextButton onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default HeroContainer;

const HeroSection = styled.section`
  height: 90vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  transition: 0.5s;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 90vh;
    top: 70px;
    left: 0;
    overflow: hidden;
    opacity: 1;
    background: rgba(0, 0, 0, 0.55);
  }
`;
const HeroImage = styled.img`
  position: absolute;
  top: 70px;
  left: 0;
  width: 100vw;
  height: 90vh;
  object-fit: cover;
`;
const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: 90%;
  color: #fff;
  h3 {
    font-weight: 400;
    text-transform: uppercase;
    text-align: left;
    margin-bottom: 0.5rem;
    letter-spacing: -0.4px;
  }
  h1 {
    font-size: clamp(1.1rem, 8vw, 2.5rem);
    font-weight: bold;
    text-transform: uppercase;
    text-align: left;
    margin-bottom: 0.5rem;
    letter-spacing: 1.2px;
    font-family: 'Cinzel', serif;
  }
  p {
    margin-bottom: 1.2rem;
    width: 40%;
    letter-spacing: 0.8px;
  }
  @media screen and (max-width: 768px) {
    h3 {
      font-size: 1rem;
    }
    p {
      width: 80%;
      font-size: 0.9rem;
    }
  }
`;

const LinkTo = styled(Link)`
  background: var(--main-color);
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 80px;
  max-width: 180px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 40px;
  color: #fff;
  font-size: 18px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 14px 24px;
  }
  &:hover {
    background: var(--second-color);
  }
`;

const SliderButtons = styled.div`
  position: absolute;
  top: 74vh;
  right: 50px;
  display: flex;
  z-index: 10;
  @media screen and (max-width: 768px) {
    right: 20px;
  }
`;

const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background: var(--main-color);
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;
  &:hover {
    background: var(--second-color);
    transform: scale(1.1);
  }
`;

const PrevButton = styled(FaChevronLeft)`
  ${arrowButtons}
`;

const NextButton = styled(FaChevronRight)`
  ${arrowButtons}
`;
