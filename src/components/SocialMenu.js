import React from 'react';
import './styles/SocialMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SocialMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socialAccounts: [
        {
          iconName: 'vk',
          link: 'https://vk.com/evrooptby'
        },
        {
          iconName: 'facebook-f',
          link: 'https://www.facebook.com/Eurooptby/'
        },
        {
          iconName: 'instagram',
          link: 'https://www.instagram.com/evrooptby/'
        },
        {
          iconName: 'odnoklassniki',
          link: 'https://ok.ru/evroopt'
        },
        {
          iconName: 'twitter',
          link: 'https://twitter.com/Evroopt'
        },
        {
          iconName: 'youtube',
          link: 'https://www.youtube.com/channel/UCYsY5ey_ufhxQVU-9jK2uMg'
        }
      ]
    }
  }
  render() {
    const socialMenuItems = this.state.socialAccounts.map(i => <li key={i.iconName}><a href={i.link} target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', i.iconName]} size="lg" /></a></li>);
    return (
      <div className="social-menu">
        <p>Мы в социальных сетях:</p>
        <ul>
          {socialMenuItems}
        </ul>
      </div>
    );
  }
};

export default SocialMenu