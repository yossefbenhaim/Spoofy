import { gql } from '@apollo/client';

const UPDATE_PLAYLIST_NAME = gql`
    mutation MyMutation($name: String!, $id: UUID!) {
        updatePlaylistById(input: { playlistPatch: { name: $name }, id: $id }) {
            clientMutationId
        }
    }
`;

export default UPDATE_PLAYLIST_NAME;
