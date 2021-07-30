import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  footerLinks,
  footerSocial,
  footerVisitUs,
} from '../../data/FooterInfoData';

const FooterInfo = () => {
  return (
    <Wrapper>
      <Container>
        <h3>visit us</h3>
        {footerVisitUs.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.email}</p>
              <p>{item.street}</p>
              <p>{item.number}</p>
            </div>
          );
        })}
      </Container>
      <Container>
        <h3>Explore</h3>
        {footerLinks.map((item, index) => {
          return (
            <Link key={index} to={item.path}>
              {item.link}
            </Link>
          );
        })}
      </Container>
      <Container>
        <h3>legal</h3>
        <p>terms</p>
        <p>privacy</p>
      </Container>
      <Container>
        <h3>Social</h3>
        {footerSocial.map((item, index) => {
          return (
            <a href={item.path} key={index}>
              {item.title}
            </a>
          );
        })}
      </Container>
    </Wrapper>
  );
};

export default FooterInfo;

const Wrapper = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  display: grid;
  h3 {
    text-transform: capitalize;
    color: #fff;
    font-weight: bolder;
    margin-bottom: 0.75rem;
  }
  div {
    margin-bottom: 1rem;
  }
  p,
  a {
    font-size: 0.95rem;
    color: var(--grey);
    text-decoration: none;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }
  @media screen and (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;
