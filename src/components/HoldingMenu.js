import React from 'react';
import './styles/HoldingMenu.css';

class HoldingMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relativeCompanies: [
        {
          name: 'Е-доставка',
          link: 'https://e-dostavka.by/'
        },
        {
          name: 'ГиперМолл',
          link: 'https://gipermall.by/'
        },
        {
          name: 'ТЕХНОПЛЮС',
          link: 'https://tehnoplus.by/'
        },
        {
          name: 'Магия',
          link: 'https://magics.by/'
        },
        {
          name: 'Хит!',
          link: 'http://hit-express.by/'
        }
      ]
    }
  }
  render() {
    const holdingMenuItems = this.state.relativeCompanies.map(i => <li key={i.name}><a href={i.link} target="_blank">{i.name}</a></li>)
    return (
      <div className="holding-menu">
        <ul>
          {holdingMenuItems}
        </ul>
      </div>
    );
  }
};

export default HoldingMenu