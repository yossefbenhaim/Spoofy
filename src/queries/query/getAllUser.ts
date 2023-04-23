import { gql } from '@apollo/client';

const GET_USERS = gql`
    query MyQuery {
        allUsers {
            nodes {
                firstName
                lastName
                id
            }
        }
    }
`;

export default GET_USERS;
