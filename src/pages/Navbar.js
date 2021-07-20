import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { linksData } from '../data/NavData';
import { FaBars } from 'react-icons/fa';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { useGlobalContext } from '../context/context';

const Navbar = () => {
  const { toggle } = useGlobalContext();
  return (
    <Wrapper>
      <NavWrapper>
        <Logo to='/'>COLD</Logo>
        <MenuBars onClick={toggle} />
        <NavMenu>
          {linksData.map((item, index) => {
            return (
              <NavMenuLinks to={item.link} key={index}>
                {item.title}
              </NavMenuLinks>
            );
          })}
        </NavMenu>
        <ContainerCart>
          <SignIn>sign in</SignIn>
          <Bag />
        </ContainerCart>
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
  background: #000;
`;

const NavWrapper = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  transition: 0.5s;
  background: #bababa;
`;

const NavLink = css`
  color: #fff;
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
    color: #fff;
    cursor: pointer;
    width: 25px;
    height: 25px;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
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
`;

const SignIn = styled(Link)`
  color: #fff;
  background: red;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
`;

const Bag = styled(HiOutlineShoppingBag)`
  color: red;
  font-size: 1.2rem;
`;
