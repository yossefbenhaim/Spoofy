import { gql } from '@apollo/client';

const ADD_SONG = gql`
    mutation CreateSong($input: CreateSongInput!) {
        createSong(input: $input) {
            song {
                name
                artistId
                duration
            }
        }
    }
`;

export default ADD_SONG;
