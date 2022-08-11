import React, { Component } from 'react';
import classes from './Product.module.css';

class Product extends Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
        // const { id, name, gallery, inStock, prices } = this.props;
        // console.log(id, name, gallery, inStock, prices);
    }

    render() {
        const {
            item,
            productName,
            productPrice,
            description,
            productBackground,
            stockText,
            addBtn,
        } = classes;
        const { id, name, gallery, inStock, prices, indexCurrency } =
            this.props;

        const background = {
            backgroundImage: `url(${gallery[0]})`,
            opacity: `${inStock ? null : '0.5'}`,
        };

        const text = {
            color: `${!inStock ? '#8D8F9A' : '#1D1F22'}`,
        };

        return (
            <div className={item}>
                <div style={background} className={productBackground}>
                    {!inStock ? (
                        <p className={stockText}>OUT OF STOCK</p>
                    ) : null}
                </div>
                <div style={text} className={description}>
                    <p className={productName}>{name}</p>
                    <p className={productPrice}>
                        <span>{prices[indexCurrency].currency.symbol}</span>
                        {prices[indexCurrency].amount}
                    </p>
                </div>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        console.log('add to basket');
                    }}
                    disabled={!inStock}
                    className={addBtn}
                ></button>
            </div>
        );
    }
}

export { Product };
