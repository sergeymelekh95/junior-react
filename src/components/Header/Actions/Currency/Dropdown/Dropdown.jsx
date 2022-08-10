import React, { Component } from 'react';
import classes from './Dropdown.module.css';

class Dropdown extends Component {
    constructor(props) {
        super();
    }

    render() {
        const { currencies, handleCurrency } = this.props;
        const { dropdown, item } = classes;

        return (
            <div className={dropdown}>
                {currencies.map((currency) => (
                    <div
                        onClick={() => {
                            handleCurrency(
                                currencies.findIndex(
                                    (el) => el.label === currency.label
                                )
                            );
                        }}
                        className={item}
                        key={currency.label}
                        id={currency.label}
                    >
                        {currency.symbol + ' '}
                        {currency.label}
                    </div>
                ))}
            </div>
        );
    }
}

export { Dropdown };
