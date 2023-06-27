import {
    addPlaylist,
    updatePlaylistSongs,
    deleteSongsPlaylist,
    updatePlaylistName,
} from 'redux/slice/playlists';

import ADD_PLAYLIST_SONG_SUBSCRIPTION from 'queries/subscription/addPlaylistSongSubscription';
import ADD_PLAYLIST_SUBSCRIPTION from 'queries/subscription/addPlaylistSubscription';
import DELETE_PLAYLIST_SONG_SUBSCRIPTION from 'queries/subscription/deletePlaylistSongSubscription';
import UPDATE_PLAYLIST_NAME_SUBSCRIPTION from 'queries/subscription/updatePlaylistNameSubscription';
import { useSubscription } from '@apollo/client';
import { useDispatch } from 'react-redux';

const GetSubscription = () => {
    const dispatch = useDispatch();

    useSubscription(ADD_PLAYLIST_SUBSCRIPTION, {
        onData: (data) => {
            const playlistsInsertData = data.data.data.listen.relatedNode;
            const playlistId = playlistsInsertData.id;
            const playlistName = playlistsInsertData.name;
            const creatorId = playlistsInsertData.creatorId;

            dispatch(
                addPlaylist({
                    id: playlistId,
                    name: playlistName,
                    creatorId: creatorId,
                    songs: [],
                })
            );
        },
    });

    useSubscription(DELETE_PLAYLIST_SONG_SUBSCRIPTION, {
        onData: (data) => {
            const decodedText = window.atob(
                data.data.data.listen.relatedNodeId as string
            );
            const parsedData = JSON.parse(decodedText);
            const playlistId = parsedData[1];
            const songId = parsedData[2];
            dispatch(
                deleteSongsPlaylist({
                    playlistId: playlistId,
                    songsId: songId,
                })
            );
        },
    });

    useSubscription(ADD_PLAYLIST_SONG_SUBSCRIPTION, {
        onData: (data) => {
            const playlistSongInsertData = data.data.data.listen.relatedNode;
            const playlistId = playlistSongInsertData.playlistId;
            const songId = playlistSongInsertData.songId;

            dispatch(
                updatePlaylistSongs({
                    playlistId: playlistId,
                    songsId: songId,
                })
            );
        },
    });

    useSubscription(UPDATE_PLAYLIST_NAME_SUBSCRIPTION, {
        onData: (data) => {
            const playlistSongInsertData = data.data.data.listen.relatedNode;
            const id = playlistSongInsertData.id;
            const name = playlistSongInsertData.name;

            dispatch(
                updatePlaylistName({
                    id: id,
                    name: name,
                    creatorId: '',
                    songs: [],
                })
            );
        },
    });
};

export default GetSubscription;
