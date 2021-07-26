import React from 'react';
import styled from 'styled-components';
import { linksData } from '../data/NavData';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { connect } from 'react-redux';

const Dropdown = ({ toggle, dispatch }) => {
  return (
    <DropdownContainer
      isOpen={toggle}
      onClick={() => dispatch({ type: 'NAVBAR_CLOSE' })}
    >
      <CloseBtn onClick={() => dispatch({ type: 'NAVBAR_CLOSE' })}>
        <CloseIcon />
      </CloseBtn>
      <div>
        <DropdownMenu>
          {linksData.map((item, index) => {
            return (
              <DropdownLink to={item.path} key={index}>
                {item.title}
              </DropdownLink>
            );
          })}
          <SignIn to='/signin'>sign in</SignIn>
        </DropdownMenu>
      </div>
    </DropdownContainer>
  );
};

const mapStateToProps = (storedData) => {
  const { toggle } = storedData;
  return { toggle };
};

export default connect(mapStateToProps)(Dropdown);

const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: var(--main-color);
  display: grid;
  align-items: center;
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
`;
const CloseBtn = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
const CloseIcon = styled(FaTimes)`
  color: #fff;
`;
const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;
`;
const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-transform: capitalize;
  &:hover {
    color: #121212;
  }
`;
const SignIn = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  width: 200px;
  height: 50px;
  text-transform: capitalize;
  transition: 0.5s;
  margin: 3rem auto 0;
  background: #000;
  letter-spacing: 1px;
`;
