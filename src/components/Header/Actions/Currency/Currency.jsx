import React, { Component } from 'react';
import classes from './Currency.module.css';
import dropdown from '../../../../img/header/dropdown.svg';
import { Dropdown } from './Dropdown/Dropdown';

class Currency extends Component {
    constructor(props) {
        super();
    }

    render() {
        const {
            indexCurrency,
            handleCurrency,
            currencies,
            handleDropdown,
            isDropdown,
        } = this.props;
        const { currency, btnDropdown, container, rotate } = classes;

        const dropdownBtnStyle = {
            backgroundImage: `url(${dropdown})`,
        };

        return (
            <div className={container}>
                <span className={currency}>
                    {currencies[indexCurrency].symbol}
                </span>
                <button
                    onClick={() => handleDropdown()}
                    className={`${btnDropdown}  ${isDropdown ? rotate : null}`}
                    style={dropdownBtnStyle}
                ></button>
                {isDropdown ? (
                    <Dropdown
                        isDropdown={isDropdown}
                        handleCurrency={handleCurrency}
                        currencies={currencies}
                    />
                ) : null}
            </div>
        );
    }
}

export { Currency };
