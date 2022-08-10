import React, { Component } from 'react';
import classes from './Product.module.css';

class Product extends Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
        const { id, name, gallery, inStock, prices } = this.props;
        console.log(id, name, gallery, inStock, prices);
    }

    render() {
        const { item, productName, productPrice, description } = classes;
        const { id, name, gallery, inStock, prices } = this.props;

        const imgStyle = {
            width: '354px',
            height: '330px',
            backgroundImage: `url(${gallery[0]})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            opacity: `${inStock ? null : '0.5'}`,
        };

        const textStyle = {
            color: `${!inStock ? '#8D8F9A' : '#1D1F22'}`,
        };

        return (
            <div className={item}>
                <div style={imgStyle}></div>
                <div style={textStyle} className={description}>
                    <p className={productName}>{name}</p>
                    <p className={productPrice}>
                        <span>{prices[0].currency.symbol}</span>
                        {prices[0].amount}
                    </p>
                </div>
            </div>
        );
    }
}

export { Product };
