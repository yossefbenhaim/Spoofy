import { gql } from '@apollo/client';

const DELETE_FAVORITS = gql`
    mutation MyMutation($userId: UUID!, $songId: UUID!) {
        deleteFavoriteByUserIdAndSongId(
            input: { userId: $userId, songId: $songId }
        ) {
            clientMutationId
            deletedFavoriteId
        }
    }
`;

export default DELETE_FAVORITS;
