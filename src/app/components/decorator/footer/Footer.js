import React, { Component } from 'react';

import ImageAnchorList from '../../atomic/organisms/ImageAnchorList';
import Content from '../../layout/Content';
import Row from '../../layout/Row';

import githubLogo from '../../../../assets/logos/github.svg';
import linkedinLogo from '../../../../assets/logos/linkedin.svg';
import weirdLogo from '../../../../assets/logos/weird.svg';
import NavLinkList from '../../atomic/organisms/NavLinkList';

const linkData = [
  { id: '1', to: '/about', title: 'About' },
  { id: '2', to: '/credits', title: 'Dataset sources' },
  { id: '3', to: '/privacy-policy', title: 'Your data and privacy' },
  { id: '4', to: '/issues', title: 'Report issues' },
];
const iconLinkData = [
  {
    id: '1',
    anchorClass: 'icon-link',
    href: 'https://weird.io',
    title: 'Github',
    src: githubLogo,
    imgClass: 'invert-on-dark-theme',
  },
  {
    id: '2',
    anchorClass: 'icon-link',
    href: 'https://weird.io',
    title: 'Linkedin',
    src: linkedinLogo,
    imgClass: 'invert-on-dark-theme',
  },
  {
    id: '3',
    anchorClass: 'icon-link',
    href: 'https://weird.io',
    title: 'Weird',
    src: weirdLogo,
    imgClass: 'invert-on-dark-theme',
  },
];

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-content">
          <div className="grid">
            <Row colSize={'column'}>
              <Content colSize={'column three'}>
                <NavLinkList children={linkData.slice(0, 2)} />
              </Content>
              <Content colSize={'column three'}>
                <NavLinkList children={linkData.slice(2, 4)} />
              </Content>
              <Content colSize={'column three'}>
                <ImageAnchorList class="icon-list" children={iconLinkData} />
              </Content>
            </Row>
          </div>
        </div>
      </footer>
    );
  }
}
