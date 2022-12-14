import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './LogoLink.module.css';
import logoLinkImg from '../../../img/header/logo.svg';

class LogoLink extends Component {
    constructor(props) {
        super();
    }

    render() {
        const { logoLink } = classes;
        const { categories } = this.props;
        const mainPage = categories[0].name;

        return (
            <NavLink to={`/${mainPage}`} className={logoLink}>
                <img src={logoLinkImg} alt='basket' />
            </NavLink>
        );
    }
}

export { LogoLink };
