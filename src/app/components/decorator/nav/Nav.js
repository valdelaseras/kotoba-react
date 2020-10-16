import React, { Component } from 'react';
import NavLinkList from '../../atomic/organisms/NavLinkList';

const brandingData = { href: '/lobby', title: 'Lobby', branding: '言葉' };
const linkData = [
  { id: '1', to: '/about', title: 'About' },
  { id: '2', to: '/profile', title: 'Profile' },
  { id: '3', to: '/lobby', title: 'Lobby' },
  { id: '4', to: '/settings', title: 'Settings' },
  { id: '5', to: '/history', title: 'Score history' },
];

const Branding = (props) => (
  <div className="branding-logo">
    <a href={props.href} title={props.title}>
      <span className="bold">{props.branding}</span>
    </a>
  </div>
);

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobileDevice: this.isMobileDevice(),
    };

    window.addEventListener('resize', () => {
      this.setState({
        isMobileDevice: this.isMobileDevice(),
      });
    });
  }

  isMobileDevice = () => {
    return window.innerWidth < 1024;
  };

  render() {
    let menu;

    if (this.state.isMobileDevice) {
      menu = (
        <div className="mobile-menu mobile-only">
          <input type="checkbox" id="nav-checkbox" className="nav-checkbox" />
          <label htmlFor="nav-checkbox" className="nav-toggle">
            <span />
            <span />
            <span />
          </label>
          <div className="slide-in-menu">
            <NavLinkList class={'mobile-nav-list'} children={linkData} />
          </div>
        </div>
      );
    } else {
      menu = <NavLinkList class={'nav-list desktop-only'} children={linkData.slice(0, 2)} />;
    }

    return (
      <nav className="nav">
        <Branding href={brandingData.href} title={brandingData.title} branding={brandingData.branding} />
        {menu}
      </nav>
    );
  }
}
