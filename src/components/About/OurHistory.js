import React from 'react';
import styled from 'styled-components';

const OurHistory = () => {
  return (
    <Wrapper>
      <TextContainer>
        <h1>Our History</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi itaque
          dolorem eaque velit consectetur a eligendi voluptates officia facilis
          rem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          soluta molestiae, est temporibus optio quisquam unde enim eos
          consequatur! Reiciendis nesciunt sapiente doloremque! Natus, deserunt!
        </p>
        <ImageContainer></ImageContainer>
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
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
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
  }
`;
