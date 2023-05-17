import { gql } from '@apollo/client';

const GET_ARTIST = gql`
    query MyQuery {
        allArtists {
            nodes {
                id
                name
            }
        }
    }
`;

export default GET_ARTIST;
