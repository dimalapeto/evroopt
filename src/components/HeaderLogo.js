import React from 'react';
import './styles/HeaderLogo.css';
import logo from '../img/logo.svg';
import logo_crop from '../img/logo_crop.svg';

function HeaderLogo() {
  return (
      <React.Fragment>
        <a className='header-logo' href='/'>
        <picture>
          <source srcSet={logo_crop} media="(max-width: 450px)" type="image/svg+xml"/>
          <img src={logo} alt="logo" type="image/svg+xml"/>
        </picture>
        </a>
      </React.Fragment>
    )
}

export default HeaderLogo