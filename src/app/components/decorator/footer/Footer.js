import React, { Component } from 'react';
import LinkList from '../../atomic/organisms/LinkList';
import ImageLinkList from '../../atomic/organisms/ImageLinkList';

const linkData = [
    { id: "1", href: "https://weird.io", title: "About" },
    { id: "2", href: "https://weird.io", title: "Dataset sources" },
    { id: "3", href: "https://weird.io", title: "Your data and privacy" },
    { id: "4", href: "https://weird.io", title: "Report issues" }
];
const iconLinkData = [
    { id: "1", anchorClass: "icon-link", href: "https://weird.io", title: "Github", src:"src/assets/logos/github.svg", imgClass: "invert-on-dark-theme" },
    { id: "2", anchorClass: "icon-link", href: "https://weird.io", title: "Linkedin", src:"src/assets/logos/linkedin.svg", imgClass: "invert-on-dark-theme" },
    { id: "3", anchorClass: "icon-link", href: "https://weird.io", title: "Weird", src:"src/assets/logos/weird.svg", imgClass: "invert-on-dark-theme" },
];

export class Footer extends Component {
    render() {
        return (
            <div className="footer-content">
                <div className="grid">
                    <div className="column">
                        <div className="column three">
                            <div className="content">
                                <LinkList children={ linkData.slice(0, 2) }/>
                            </div>
                        </div>
                        <div className="column three">
                            <div className="content">
                                <LinkList children={ linkData.slice(2, 4) }/>
                            </div>
                        </div>
                        <div className="column three">
                            <div className="content">
                                <ImageLinkList children={ iconLinkData }/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
