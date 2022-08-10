import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavMenu.module.css';

class NavMenu extends Component {
    constructor(props) {
        super();
    }

    render() {
        const { categories } = this.props;
        const {navMenu, navList, navLink, active} = classes;
        const checkActiveLink = navData => navData.isActive ? active : navLink;

        return (
            <nav className={navMenu}>
                <ul className={navList}>
                    {categories.map(({name}) => (
                        <li key={name}>
                            <NavLink to={`/${name}`} className={checkActiveLink}>
                                {name.toUpperCase()}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export { NavMenu };
