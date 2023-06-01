import { gql } from '@apollo/client';

const GET_SONGS_BY_PLAYLIST_ID = gql`
    query MyQuery($playlistId: UUID!) {
        allPlaylistsongs(filter: { playlistId: { equalTo: $playlistId } }) {
            nodes {
                songBySongId {
                    duration
                    id
                    name
                    artistId
                }
            }
        }
    }
`;

export default GET_SONGS_BY_PLAYLIST_ID;
