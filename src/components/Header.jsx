import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import logo from '../assets/svg/logo.svg';

const Header = () => (
  <S.Header>
    <S.Logo src={logo} alt="PokeApp" />

    {/* <S.Menu>
      <S.MenuItem to="/">Home</S.MenuItem>
      <S.MenuItem to="/favorites">Favorites</S.MenuItem>
    </S.Menu> */}
  </S.Header>
);

const S = {};

S.Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

S.Logo = styled.img`
  width: 400px;
  height: 200px;
  object-fit: cover;
`;

S.Menu = styled.nav`
  display: flex;
  align-items: center;
`;

S.MenuItem = styled(Link)`
  height: 40px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.4rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: white;
  background-color: ${palette('accent')};
  margin: 0 10px;
`;

export default Header;
