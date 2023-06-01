import { gql } from '@apollo/client';

const GET_PLAYLIST = gql`
    query MyQuery {
        allPlaylists {
            nodes {
                id
                name
                creatorId
            }
        }
    }
`;

export default GET_PLAYLIST;
