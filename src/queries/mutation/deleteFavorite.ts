import { gql } from '@apollo/client';

const DELETE_FAVORITE = gql`
    mutation MyMutation($userId: UUID!, $songId: UUID!) {
        deleteFavoriteByUserIdAndSongId(
            input: { userId: $userId, songId: $songId }
        ) {
            clientMutationId
            deletedFavoriteId
        }
    }
`;

export default DELETE_FAVORITE;
