import { gql } from '@apollo/client';

const GET_ALL_ARTIST = gql`
    query MyQuery {
        allArtists {
            nodes {
                id
                name
            }
        }
    }
`;

export default GET_ALL_ARTIST;
