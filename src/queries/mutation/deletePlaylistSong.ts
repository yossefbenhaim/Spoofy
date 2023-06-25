import { gql } from '@apollo/client';

const DELETE_PLAYLIST_SONG = gql`
    mutation MyMutation($playlistId: UUID!, $songId: UUID!) {
        deletePlaylistsongByPlaylistIdAndSongId(
            input: { playlistId: $playlistId, songId: $songId }
        ) {
            clientMutationId
            deletedPlaylistsongId
        }
    }
`;

export default DELETE_PLAYLIST_SONG;
