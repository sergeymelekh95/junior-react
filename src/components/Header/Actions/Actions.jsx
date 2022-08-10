import React, { Component } from 'react';
import classes from './Actions.module.css';
import { Currency } from './Currency/Currency';
import { Basket } from './Basket/Basket';

class Actions extends Component {
    constructor(props) {
        super();
    }

    render() {
        const { actionsContainer } = classes;
        const {
            indexCurrency,
            handleCurrency,
            currencies,
            handleDropdown,
            isDropdown,
        } = this.props;

        return (
            <div className={actionsContainer}>
                <Currency
                    isDropdown={isDropdown}
                    handleDropdown={handleDropdown}
                    currencies={currencies}
                    handleCurrency={handleCurrency}
                    indexCurrency={indexCurrency}
                />
                <Basket />
            </div>
        );
    }
}

export { Actions };
