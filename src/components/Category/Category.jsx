import React, { Component } from 'react';
import { getProducts } from '../../queries/getProducts';
import classes from './Category.module.css';
import { Product } from './Product/Product';

class Category extends Component {
    constructor(props) {
        super();

        this.state = {
            products: [],
        };
    }

    setProducts() {
        const { name } = this.props;

        getProducts(name).then((result) => {
            this.setState({
                products: result.data.category.products,
            });
        });
    }

    componentDidUpdate(prevState) {
        const { name } = this.props;

        if (name !== prevState.name) {
            this.setProducts();
        }
    }

    componentDidMount() {
        this.setProducts();
    }

    render() {
        const { name, indexCurrency } = this.props;
        const { products } = this.state;
        const { title, container } = classes;

        return (
            <>
                <h1 className={title}>{name.toUpperCase()}</h1>
                <div className={container}>
                    {products.length ? (
                        products.map((product) => (
                            <Product
                                {...product}
                                indexCurrency={indexCurrency}
                                key={product.id}
                            />
                        ))
                    ) : (
                        <h1>Loading...</h1>
                    )}
                </div>
            </>
        );
    }
}

export { Category };
