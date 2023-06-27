import { gql } from '@apollo/client';

const DELETE_PLAYLIST_SONG_SUBSCRIPTION = gql`
    subscription MySubscription {
        listen(topic: "delete_playlistSong") {
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

export default DELETE_PLAYLIST_SONG_SUBSCRIPTION;
