import React, { Component } from 'react';
import classes from './Basket.module.css';
import basket from '../../../../img/header/basket.svg';

class Basket extends Component {
    render() {
        const { btnBasket } = classes;
        const basketBtnStyle = {
            backgroundImage: `url(${basket})`,
        };

        return <button className={btnBasket} style={basketBtnStyle}></button>;
    }
}

export { Basket };
