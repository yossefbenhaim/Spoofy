import { gql } from '@apollo/client';

const GET_SONGS = gql`
    query MyQuery {
        allSongs {
            nodes {
                id
                name
                duration
                artistByArtistId {
                    name
                }
            }
        }
    }
`;

export default GET_SONGS;
