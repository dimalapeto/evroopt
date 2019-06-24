import React from 'react';
import HeaderLogo from './HeaderLogo';
import MainMenu from './MainMenu';
import Button from './Button';
import Search from './Search';
import './styles/HeaderContainer.css';

function HeaderContainer() {
  return (
      <div>
        <div className="header-container">
          <a className="toggle open" href="#nav">Меню</a>
          <HeaderLogo />
          <MainMenu />
          <Button name="Войти" />
        </div>
        <Search className="mobile"/>
      </div>
    )
}

export default HeaderContainer