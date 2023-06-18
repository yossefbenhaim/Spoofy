import { gql } from '@apollo/client';

const ADD_PLAYLIST_SUBSCRIPTION = gql`
    subscription MySubscription {
        listen(topic: "new_playlist") {
            relatedNodeId
            relatedNode {
                ... on Playlist {
                    __typename
                    id
                    name
                    creatorId
                    createdPlaylist
                }
            }
        }
    }
`;

export default ADD_PLAYLIST_SUBSCRIPTION;
