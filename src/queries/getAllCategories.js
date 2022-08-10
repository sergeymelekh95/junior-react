import { client } from '..';
import { gql } from '@apollo/client';

const getAllCategories = () => {
    return client.query({
        query: gql`
            query getAllCategories
            {
                categories {
                    name
                }
            }
        `,
    });
};

export { getAllCategories };