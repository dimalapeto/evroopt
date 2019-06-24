import React from 'react';
import './styles/Submenu.css';
import SocialMenu from './SocialMenu';
import Button from './Button';
import Search from './Search';

function Submenu() {
  return (
      <div className="row submenu">
        <SocialMenu />
        <Search className="desktop"/>
        <Button name="Войти" />
      </div>

    )
}
export default Submenu