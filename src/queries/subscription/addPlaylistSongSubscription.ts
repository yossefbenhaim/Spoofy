import { gql } from '@apollo/client';

const ADD_PLAYLIST_SONG_SUBSCRIPTION = gql`
    subscription MySubscription {
        listen(topic: "new_playlistSong") {
            relatedNodeId
            relatedNode {
                ... on Playlistsong {
                    __typename
                    playlistId
                    songId
                }
            }
        }
    }
`;

export default ADD_PLAYLIST_SONG_SUBSCRIPTION;
