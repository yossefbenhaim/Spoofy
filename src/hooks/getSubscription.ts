import {
    addPlaylist,
    updatePlaylistSongs,
    deleteSongFromPlaylist,
    updatePlaylistName,
} from 'redux/slice/playlists';

import {
    addSong,
    deleteSong,
    resetCurrentSongId,
} from 'redux/slice/currentPlaylist';

import { useSubscription } from '@apollo/client';
import { useAppSelector } from 'redux/store';
import { useDispatch } from 'react-redux';
import { Song } from 'models/interface/song';

import ADD_PLAYLIST_SONG_SUBSCRIPTION from 'queries/subscription/addPlaylistSongSubscription';
import ADD_PLAYLIST_SUBSCRIPTION from 'queries/subscription/addPlaylistSubscription';
import DELETE_PLAYLIST_SONG_SUBSCRIPTION from 'queries/subscription/deletePlaylistSongSubscription';
import UPDATE_PLAYLIST_NAME_SUBSCRIPTION from 'queries/subscription/updatePlaylistNameSubscription';

const getSubscription = () => {
    const dispatch = useDispatch();
    const songs = useAppSelector((state) => state.songs.songs);
    const currentSongId = useAppSelector(
        (state) => state.currentPlaylist.songId
    );

    useSubscription(ADD_PLAYLIST_SUBSCRIPTION, {
        onData: (data) => {
            const playlistsInsertData = data.data.data.listen.relatedNode;
            dispatch(
                addPlaylist({
                    id: playlistsInsertData.id,
                    name: playlistsInsertData.name,
                    creatorId: playlistsInsertData.creatorId,
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
                deleteSongFromPlaylist({
                    playlistId: playlistId,
                    songsId: songId,
                })
            );
            dispatch(deleteSong(songId));
            if (currentSongId === songId) {
                dispatch(resetCurrentSongId());
            }
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
            const newSong = songs.find((song: Song) => song.id === songId);
            dispatch(addSong(newSong as Song));
        },
    });

    useSubscription(UPDATE_PLAYLIST_NAME_SUBSCRIPTION, {
        onData: (data) => {
            const playlistSongInsertData = data.data.data.listen.relatedNode;
            const playlistId = playlistSongInsertData.id;
            const newName = playlistSongInsertData.name;
            dispatch(
                updatePlaylistName({
                    id: playlistId,
                    name: newName,
                })
            );
        },
    });
};

export default getSubscription;
