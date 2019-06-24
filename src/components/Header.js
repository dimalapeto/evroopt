import React from 'react';
import './styles/Header.css';
import Submenu from './Submenu' ;
import HeaderContainer from './HeaderContainer';

function Header() {
  return (
      <header>
        <div className="inner">
          <Submenu />
          <HeaderContainer />
        </div>
      </header>
    )
}

export default Header