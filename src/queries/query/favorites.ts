import { gql } from '@apollo/client';

const GET_USERS = gql`
    query MyQuery {
        allFavorites {
            nodes {
                songId
                userId
            }
        }
    }
`;

export default GET_USERS;
