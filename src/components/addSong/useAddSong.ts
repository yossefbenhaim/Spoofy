import { VariantType, useSnackbar } from 'notistack';
import { AddSongFormFieldsNames } from 'models/enums/formFieldsName';
import { useQuery, useMutation } from '@apollo/client';
import { FeedbackMessage } from 'models/enums/feedbackMessage';
import { SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AddSongForm } from './AddSongSchema';
import { useState } from 'react';
import { addSong } from 'redux/slice/songs';
import { Artist } from 'models/interface/artist';

import GET_ARTIST from 'queries/query/artists';
import ADD_SONG from 'queries/mutation/addSong';

const useAddSong = () => {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const [openDialogAddSong, setOpenDialogAddSong] = useState<boolean>(false);
    const [artists, setArtists] = useState<Artist[]>([]);
    const [mutationAddSong] = useMutation(ADD_SONG);

    const defaultDialogValues = {
        [AddSongFormFieldsNames.name]: '',
        [AddSongFormFieldsNames.artist]: '',
        [AddSongFormFieldsNames.duration]: 0,
    };

    const handleQueryMessage = (variant: VariantType) =>
        enqueueSnackbar(FeedbackMessage.createdSong, { variant });

    const onSubmit: SubmitHandler<AddSongForm> = (data) => {
        const { name, artist, duration } = data;
        const song: AddSongForm = data;

        if (song)
            mutationAddSong({
                variables: {
                    name: name,
                    artistId: artist,
                    duration: duration,
                },
            })
                .then((responsFromMutation) => {
                    dispatch(
                        addSong({
                            id: responsFromMutation.data.createSong.song.id,
                            name: name,
                            duration: duration,
                            artist: responsFromMutation.data.createSong.song
                                .artistByArtistId.name,
                        })
                    );
                    handleQueryMessage('success');
                })
                .catch((err) => console.error('Failed to add song: ', err));
        handleClose();
    };

    const handleClickOpen = () => setOpenDialogAddSong(true);

    const handleClose = () => setOpenDialogAddSong(false);

    useQuery(GET_ARTIST, {
        onCompleted: (data) => {
            setArtists(data.allArtists.nodes);
        },
    });

    return {
        handleClickOpen,
        handleClose,
        setArtists,
        onSubmit,
        artists,
        openDialogAddSong,
        defaultDialogValues,
    };
};

export default useAddSong;
