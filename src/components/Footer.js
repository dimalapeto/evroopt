import React from 'react';
import './styles/Footer.css';
import SocialMenu from './SocialMenu' ;
import Hotline from './Hotline' ;
import Button from './Button' ;
import Copyright from './Copyright' ;

function Footer() {
  return (
    <footer>
      <div className="inner">
        <div className="row">
          <Hotline />
          <Button name="Задать вопрос" />
          <SocialMenu />
          <Copyright />
        </div>
      </div>
    </footer>
    )
}

export default Footer