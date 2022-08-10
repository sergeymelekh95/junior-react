import React, { Component } from 'react';
import { NavMenu } from './NavLink/NavMenu';
import classes from './Header.module.css';
import { LogoLink } from './LogoLink/LogoLink';

class Header extends Component {
    constructor(props) {
        super();
    }

    render() {
        const { categories } = this.props;
        const { header, content } = classes;

        return (
            <header className={header}>
                <div className={content}>
                    <div className={classes.headerRow}>
                        <NavMenu categories={categories} />
                        <LogoLink categories={categories} />
                    </div>
                </div>
            </header>
        );
    }
}

export { Header };
