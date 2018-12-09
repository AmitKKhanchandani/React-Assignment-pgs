import React, { Component } from 'react';
import {FooterContent, GitHubLogo} from './footerStyle';

class Footer extends Component {
    render() {
        return (
            <FooterContent>
                Designed and Developed by Amit K Khanchandani
                <br/>
                <a href="http://resume.amitk.co.in">E-Resume</a> | 
                <a href="http://www.amitk.co.in"> AmitK.co.in</a> | 
                <a href="https://github.com/AmitKKhanchandani/React-Assignment-pgs" rel="noopener noreferrer" target="_blank"> <GitHubLogo /> View Source Code</a>
            </FooterContent>
        );
    }
}

export default Footer;