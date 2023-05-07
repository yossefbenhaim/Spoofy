import { gql } from '@apollo/client';

const ADD_FAVORITE = gql`
    mutation CreateFavorite($input: CreateFavoriteInput!) {
        createFavorite(input: $input) {
            favorite {
                userId
                songId
            }
        }
    }
`;

export default ADD_FAVORITE;
