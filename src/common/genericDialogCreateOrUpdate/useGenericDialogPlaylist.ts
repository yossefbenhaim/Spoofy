import React, { useEffect, useMemo, useState } from 'react';
import { VariantType, useSnackbar } from 'notistack';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@apollo/client';
import { AddOrUpdatePlaylistForm } from './schamaDialogCreateOrUpdate';
import { useAppSelector } from 'redux/store';

import ADD_PLAYLIST from 'queries/mutation/addPlaylist';
import ADD_PLAYLIST_SONG from 'queries/mutation/addPlaylistSong';
import UPDATE_PLAYLIST_NAME from 'queries/mutation/updatePlaylistName';
import DELETE_PLAYLIST_SONG from 'queries/mutation/deletePlaylistSong';
import AddPlaylistFormFieldName from 'models/emuns/addPlaylistFormFieldName';
import Song from 'models/interface/song';

import AddOrUpdatePlaylistSchema from './schamaDialogCreateOrUpdate';
import SnakbarMessage from './snakbarMessage';
import Playlist from 'models/interface/playlist';

interface Props {
    openDialogAddPlaylist: boolean;
    currentPlaylist: Playlist | undefined;
    songs: Song[];
    currentUser: string | undefined;
    handleClose: () => void;
}

const useGenericDialogPlaylist = (props: Props) => {
    const {
        currentPlaylist,
        songs,
        currentUser,
        handleClose,
        openDialogAddPlaylist,
    } = props;
    const { enqueueSnackbar } = useSnackbar();

    const [mutationAddSong] = useMutation(ADD_PLAYLIST);
    const [mutationAddPlaylistSong] = useMutation(ADD_PLAYLIST_SONG);
    const [mutationDeletePlaylistSong] = useMutation(DELETE_PLAYLIST_SONG);
    const [mutationUpdatePlaylistName] = useMutation(UPDATE_PLAYLIST_NAME);

    const indexOfChoseSongs = useMemo<number[] | undefined>(() => {
        return currentPlaylist?.songs?.map((choseSong) =>
            songs.findIndex((song) => song.id === choseSong)
        );
    }, [currentPlaylist]);

    const songsId = useMemo<string[]>(() => {
        return songs.map((song) => song.id);
    }, [songs]);

    const defaultDialogValues = {
        [AddPlaylistFormFieldName.name]: currentPlaylist?.name,
        [AddPlaylistFormFieldName.songs]: indexOfChoseSongs?.map(
            (index) => songsId[index]
        ),
        // [AddPlaylistFormFieldName.songs]: currentPlaylist
        //     ? indexOfChoseSongs?.map((index) => songsId[index])
        //     : ['86bbd5a6-daea-40c1-96c7-3279a42be5a3'],
    };

    const handleQueryMessage = (variant: VariantType) =>
        currentPlaylist
            ? enqueueSnackbar(SnakbarMessage.UpdatePlaylist, { variant })
            : enqueueSnackbar(SnakbarMessage.addNewPlaylist, { variant });

    //  return new songs that not was in chose
    const newAddedSongs = (newSongs: string[]) => {
        return newSongs.filter(
            (newSong) =>
                !currentPlaylist?.songs?.some((song) => song === newSong)
        );
    };

    //  return delete songs
    const oldSongsToDelete = (newSongs: string[]) => {
        return currentPlaylist?.songs?.filter(
            (song) => !newSongs.some((newSong) => song === newSong)
        );
    };

    const onSubmit: SubmitHandler<AddOrUpdatePlaylistForm> = (data) => {
        const { name, songs } = data;
        if (name && currentPlaylist) {
            mutationAddSong({
                variables: {
                    name: name,
                    creatorId: currentUser,
                },
            })
                .then((resAddPlaylist) => {
                    const newPlaylistId =
                        resAddPlaylist.data.createPlaylist.playlist.id;
                    songs.map((song) => {
                        mutationAddPlaylistSong({
                            variables: {
                                playlistId: newPlaylistId,
                                songId: song,
                            },
                        });
                    });
                })
                .catch((err) => console.error('Failed to add song: ', err));
        } else {
            const deleteSongs = oldSongsToDelete(songs);
            const newSongs = newAddedSongs(songs);

            if (deleteSongs)
                deleteSongs.map((song) => {
                    mutationDeletePlaylistSong({
                        variables: {
                            playlistId: currentPlaylist?.id,
                            songId: song,
                        },
                    });
                });

            if (newSongs)
                newSongs.map((song) => {
                    mutationAddPlaylistSong({
                        variables: {
                            playlistId: currentPlaylist?.id,
                            songId: song,
                        },
                    });
                });

            if (name !== currentPlaylist?.name)
                mutationUpdatePlaylistName({
                    variables: { id: currentPlaylist?.id, name: name },
                });
        }
        handleQueryMessage('success');
        handleClose();
    };

    return {
        onSubmit,
        defaultDialogValues,
        songsId,
    };
};

export default useGenericDialogPlaylist;
