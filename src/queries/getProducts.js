import { client } from '..';
import { gql } from '@apollo/client';

const getProducts = (category) => {
    return client.query({
        query: gql`
                {
                    category(input: { title: "${category}" }) {
                      name,
                      products {
                        id,
                        name,
                        inStock,
                        gallery,
                        prices{
                          amount,
                          currency {
                            label,
                            symbol
                          }
                        }
                      }
                    }
                  }
                `,
    });
};

export { getProducts };