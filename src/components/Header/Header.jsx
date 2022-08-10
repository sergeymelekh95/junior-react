import React, { Component } from 'react';
import { NavMenu } from './NavLink/NavMenu';
import classes from './Header.module.css';
import { LogoLink } from './LogoLink/LogoLink';
import { Actions } from './Actions/Actions';

class Header extends Component {
    constructor(props) {
        super();
    }

    render() {
        const {
            categories,
            indexCurrency,
            handleCurrency,
            currencies,
            handleDropdown,
            isDropdown,
        } = this.props;
        const { header, content } = classes;

        return (
            <header className={header}>
                <div className={content}>
                    <div className={classes.headerRow}>
                        <NavMenu categories={categories} />
                        <LogoLink categories={categories} />
                        <Actions
                            isDropdown={isDropdown}
                            handleDropdown={handleDropdown}
                            currencies={currencies}
                            handleCurrency={handleCurrency}
                            indexCurrency={indexCurrency}
                        />
                    </div>
                </div>
            </header>
        );
    }
}

export { Header };
