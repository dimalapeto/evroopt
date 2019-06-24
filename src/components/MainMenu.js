import React from 'react';
import './styles/MainMenu.css';
import SocialMenu from './SocialMenu';

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainMenu: [
        {
          className: 'discount',
          name: 'Красная цена',
          link: '/'
        },
        {
          className: 'deals',
          name: 'Акции',
          link: '/'
        },
        {
          className: 'card',
          name: 'Карта Е-плюс',
          link: '/'
        },
        {
          className: 'store',
          name: 'Магазины',
          link: '/'
        }
      ],
      mainSubMenu: [
        {
          className: '',
          name: 'Бесплатные автобусы',
          link: '/'
        },
        {
          className: '',
          name: 'Все готово!',
          link: '/'
        },
        {
          className: '',
          name: 'Новости',
          link: '/'
        },
        {
          className: '',
          name: 'Карьера',
          link: '/'
        },
        {
          className: '',
          name: 'Партнерам',
          link: '/'
        },
        {
          className: '',
          name: 'О компании',
          link: '/'
        }
      ]
    }
  }
  render() {
    const mainMenuItems = this.state.mainMenu.map(i => <li key={i.name}><a /*className={'icon' + " " + i.className}*/ href={i.link}>{i.name}</a></li>)
    const mainSubMenuItems = this.state.mainSubMenu.map(i => <li key={i.name}><a className={i.className} href={i.link}>{i.name}</a></li>)
    return (
      <nav id='nav'>
        <a className="toggle close" href="/">×</a>
        <ul className="main-menu">
          {mainMenuItems}
        </ul>
        <ul className="main-sub-menu">
          {mainSubMenuItems}
        </ul>
      <SocialMenu />
      </nav>

    );
  }
};

export default MainMenu