import { GenericPlaylistDialogForm } from './schamaGenericPlaylistDialog';
import { VariantType, useSnackbar } from 'notistack';
import { SnakbarMessage } from './snakbarMessage';
import { useAppSelector } from 'redux/store';
import { SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { difference } from 'lodash';
import { Playlist } from 'models/interface/playlist';

import ADD_PLAYLIST from 'queries/mutation/addPlaylist';
import ADD_PLAYLIST_SONG from 'queries/mutation/addPlaylistSong';
import UPDATE_PLAYLIST_NAME from 'queries/mutation/updatePlaylistName';
import DELETE_PLAYLIST_SONG from 'queries/mutation/deletePlaylistSong';

interface Props {
    currentPlaylist: Playlist | undefined;
    handleClose: () => void;
}

const useGenericDialogPlaylist = (props: Props) => {
    const { currentPlaylist, handleClose } = props;
    const { enqueueSnackbar } = useSnackbar();

    const [mutationAddPlaylist] = useMutation(ADD_PLAYLIST);
    const [mutationAddPlaylistSong] = useMutation(ADD_PLAYLIST_SONG);
    const [mutationDeletePlaylistSong] = useMutation(DELETE_PLAYLIST_SONG);
    const [mutationUpdatePlaylistName] = useMutation(UPDATE_PLAYLIST_NAME);

    const songs = useAppSelector((state) => state.songs.songs);
    const currentUser = useAppSelector((state) => state.currentUser.user?.id);
    const IS_EDIT = Boolean(currentPlaylist);

    const defaultDialogValues = {
        name: currentPlaylist?.name,
        songs: currentPlaylist?.songs,
    };

    const handleQueryMessage = (variant: VariantType) =>
        IS_EDIT
            ? enqueueSnackbar(SnakbarMessage.UpdatePlaylist, { variant })
            : enqueueSnackbar(SnakbarMessage.addNewPlaylist, { variant });

    const onSubmit: SubmitHandler<GenericPlaylistDialogForm> = async (data) => {
        try {
            const { name, songs } = data;
            if (!IS_EDIT) {
                const res = await mutationAddPlaylist({
                    variables: {
                        name: name,
                        creatorId: currentUser,
                    },
                });
                const newPlaylistId = res.data.createPlaylist.playlist.id;
                songs.map(async (song) => {
                    await mutationAddPlaylistSong({
                        variables: {
                            playlistId: newPlaylistId,
                            songId: song,
                        },
                    });
                });
            } else {
                const deleteSongs = difference(
                    defaultDialogValues.songs,
                    songs
                );
                const newSongs = difference(
                    songs,
                    defaultDialogValues.songs as string[]
                );

                if (deleteSongs.length > 0)
                    deleteSongs.map(async (song) => {
                        await mutationDeletePlaylistSong({
                            variables: {
                                playlistId: currentPlaylist?.id,
                                songId: song,
                            },
                        });
                    });

                if (newSongs.length > 0)
                    newSongs.map(async (song) => {
                        await mutationAddPlaylistSong({
                            variables: {
                                playlistId: currentPlaylist?.id,
                                songId: song,
                            },
                        });
                    });

                if (name !== currentPlaylist?.name)
                    await mutationUpdatePlaylistName({
                        variables: { id: currentPlaylist?.id, name: name },
                    });
            }

            handleQueryMessage('success');
            handleClose();
        } catch (err) {
            console.error('Failed to add or update playlist: ', err);
        }
    };

    return {
        defaultDialogValues,
        onSubmit,
        IS_EDIT,
        songs,
    };
};

export default useGenericDialogPlaylist;
