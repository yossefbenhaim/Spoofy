import { gql } from '@apollo/client';

const ADD_PLAYLIST_SONG = gql`
    mutation MyMutation2($playlistId: UUID!, $songId: UUID!) {
        createPlaylistsong(
            input: {
                playlistsong: { playlistId: $playlistId, songId: $songId }
            }
        ) {
            clientMutationId
            playlistsong {
                playlistId
                songId
            }
        }
    }
`;

export default ADD_PLAYLIST_SONG;
