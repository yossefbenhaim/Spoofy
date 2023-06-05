import { gql } from '@apollo/client';

const GET_PLAYLIST = gql`
    query MyQuery {
        allPlaylists {
            nodes {
                id
                name
                creatorId
                playlistsongsByPlaylistId {
                    nodes {
                        songId
                    }
                }
            }
        }
    }
`;

export default GET_PLAYLIST;
