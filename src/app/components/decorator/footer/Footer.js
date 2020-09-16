import React, { Component } from 'react';

import AnchorList from '../../atomic/organisms/AnchorList';
import ImageAnchorList from '../../atomic/organisms/ImageAnchorList';

import githubLogo from '../../../../assets/logos/github.svg';
import linkedinLogo from '../../../../assets/logos/linkedin.svg';
import weirdLogo from '../../../../assets/logos/weird.svg';

const linkData = [
    { id: "1", href: "https://weird.io", title: "About" },
    { id: "2", href: "https://weird.io", title: "Dataset sources" },
    { id: "3", href: "https://weird.io", title: "Your data and privacy" },
    { id: "4", href: "https://weird.io", title: "Report issues" }
];
const iconLinkData = [
    { id: "1", anchorClass: "icon-link", href: "https://weird.io", title: "Github", src: githubLogo, imgClass: "invert-on-dark-theme" },
    { id: "2", anchorClass: "icon-link", href: "https://weird.io", title: "Linkedin", src: linkedinLogo, imgClass: "invert-on-dark-theme" },
    { id: "3", anchorClass: "icon-link", href: "https://weird.io", title: "Weird", src: weirdLogo, imgClass: "invert-on-dark-theme" },
];

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-content">
                <div className="grid">
                    <div className="column">
                        <div className="column three">
                            <div className="content">
                                <AnchorList children={ linkData.slice(0, 2) }/>
                            </div>
                        </div>
                        <div className="column three">
                            <div className="content">
                                <AnchorList children={ linkData.slice(2, 4) }/>
                            </div>
                        </div>
                        <div className="column three">
                            <div className="content">
                                <ImageAnchorList class="icon-list" children={ iconLinkData }/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
