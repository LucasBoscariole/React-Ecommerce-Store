import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { linksData } from '../data/NavData';
import { FaBars } from 'react-icons/fa';
import { IoBagHandle } from 'react-icons/io5';
import { useFilterContext } from '../reducer/context';
import { useCartContext } from '../reducer/cart_context';

const Navbar = () => {
  //NavBar Background
  const [navBarBackground, setNavBarBackground] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavBarBackground(true);
    } else {
      setNavBarBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);
  //NavBar Background
  const { toggle } = useFilterContext();
  const { total_items } = useCartContext();

  return (
    <Wrapper fixedNav={navBarBackground}>
      <NavWrapper>
        <Logo to='/'>COLD</Logo>
        <NavMenu>
          {linksData.map((item, index) => {
            return (
              <NavMenuLinks to={item.path} key={index}>
                {item.title}
              </NavMenuLinks>
            );
          })}
        </NavMenu>
        <ContainerCart>
          <SignIn to='/'>sign in</SignIn>
          <Bag to='/cart'>
            <div className='total'>{total_items}</div>
            <IoBagHandle />
          </Bag>
        </ContainerCart>
        <MenuBars onClick={toggle} />
      </NavWrapper>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ fixedNav }) => (fixedNav ? '#fff' : 'var(--grey)')};
  z-index: 100;
  transition: 0.5s;
  box-shadow: ${({ fixedNav }) =>
    fixedNav ? '0px 0px 20px 2px rgba(0, 0, 0, 0.4)' : null};
`;

const NavWrapper = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  transition: 0.3s;
`;

const NavLink = css`
  color: #000;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;

const MenuBars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    color: #000;
    cursor: pointer;
    width: 30px;
    height: 30px;
    margin-top: 1.1rem;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  height: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
  text-transform: capitalize;
  letter-spacing: 0.5px;
  &:hover {
    border-bottom: 2px solid #000;
  }
`;

const ContainerCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15%;
  height: 100%;
  @media screen and (max-width: 768px) {
    margin: 0 1rem 0 auto;
  }
`;

const SignIn = styled(Link)`
  color: #fff;
  border: 1px solid #000;
  background: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  padding: 0.75rem 2rem;
  text-transform: capitalize;
  transition: 0.5s;
  &:hover {
    background: #000;
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Bag = styled(Link)`
  color: #000;
  font-size: 2rem;
  text-decoration: none;
  position: relative;
  .total {
    position: absolute;
    top: 0;
    right: -5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--main-color);
    color: #fff;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
