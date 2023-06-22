import { gql } from '@apollo/client';

const UPDATE_PLAYLIST_NAME_SUBSCRIPTION = gql`
    subscription MySubscription {
        listen(topic: "update_playlist") {
            relatedNodeId
            relatedNode {
                ... on Playlist {
                    __typename
                    id
                    name
                }
            }
        }
    }
`;

export default UPDATE_PLAYLIST_NAME_SUBSCRIPTION;
