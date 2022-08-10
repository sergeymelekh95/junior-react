import { client } from '..';
import { gql } from '@apollo/client';

const getCurrencies = () => {
    return client.query({
        query: gql`
            {
                currencies {
                    label
                    symbol
                }
            }
        `,
    });
};

export { getCurrencies };
