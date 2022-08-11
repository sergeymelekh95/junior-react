import { client } from '..';
import { gql } from '@apollo/client';

const getProduct = (id) => {
    return client.query({
        query: gql`
            {
                product(id: "${id}") {
                    id
                    name
                    inStock
                    gallery
                    description
                    category
                    attributes {
                        id
                        name
                        type
                        items {
                            displayValue
                            value
                            id
                        }
                    }
                    prices {
                        amount
                        currency {
                            label
                            symbol
                        }
                    }
                    brand
                }
            }
        `,
    });
};

export { getProduct };
