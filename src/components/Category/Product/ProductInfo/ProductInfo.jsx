import React, { Component } from 'react';
import { getProduct } from '../../../../queries/getProduct';

class ProductInfo extends Component {
    constructor(props) {
        super();

        this.state = {
            loading: true,
            product: null,
        };
    }

    componentDidMount() {
        const id = window.location.href.split('/').slice(-1).join();

        getProduct(id).then((result) =>
            this.setState({
                loading: false,
                product: result.data.product,
            })
        );
    }

    render() {
        const {product} = this.state;
        const { indexCurrency } = this.props;

        return (
            product ? <div>ProductInfo</div> : <h1>Loading</h1>
        );
    }
}

export { ProductInfo };
