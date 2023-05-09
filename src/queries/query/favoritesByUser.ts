import { gql } from '@apollo/client';

const FAVORITES_BY_USER = gql`
    query MyQuery($userId: UUID!) {
        allFavorites(filter: { userId: { equalTo: $userId } }) {
            nodes {
                songId
            }
        }
    }
`;

export default FAVORITES_BY_USER;
