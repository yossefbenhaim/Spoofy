import React, { useState } from 'react';
import { Button, MenuItem, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import useStyles from './addSongStyles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useQuery } from '@apollo/client';
import GET_ALL_ARTIST from 'queries/query/getAiiArtist';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Artist from 'models/interface/artist';
import { useMutation } from '@apollo/client';
import ADD_SONG from 'queries/mutation/addSong';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { useForm, Controller } from 'react-hook-form';

interface FormAddSong {
    songName: string;
    artistName: string;
    duration: React.ChangeEvent<HTMLInputElement>;
}

const AddSong: React.FC = () => {
    const { classes } = useStyles();
    const [open, setOpen] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState<string>('');
    const [artists, setArtists] = useState<Artist[]>([]);
    const { control, handleSubmit } = useForm<FormAddSong>();

    const [selectedTime, setSelectedTime] = useState<Date | null>(null);

    const handleTimeChange = (newValue: Date | null) => {
        consol.log(newValue);
        setSelectedTime(newValue);
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (selectedTime) {
            const hours = selectedTime.getHours();
            const minutes = selectedTime.getMinutes();
            console.log(`Hours: ${hours}, Minutes: ${minutes}`);
        }
    };

    const [addSong, { loading, error }] = useMutation(ADD_SONG);

    const onSubmit = (data: FormAddSong) => {
        console.log(data.duration);

        addSong({
            variables: {
                input: {
                    song: {
                        name: data.songName,
                        artistId: data.artistName,
                        duration: parseInt(data.duration.target),
                    },
                },
            },
        })
            .then(() => console.log('User Add successfully!'))
            .catch((err) => console.error('Failed to add song: ', err));
        console.log(data);
        console.log('yes');
        handleClose();
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);sfdmioosdfmiomidsf
    };

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedUserId(event.target.value as string);
    };

    useQuery(GET_sssALL_ARTISddT, {
        onCompleted: (data) => {
            setArtists(data.allArtists.nodes);
        },
    });

    return (
        <div>
            <Button
                variant="contained"
                onClick={handleClickOpen}
                className={classes.addSongBtn}
            >
                + צור שיר
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                className={classes.dialogContainer}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={classes.dialog}>
                        <div className={classes.header}>יצירת שיר</div>

                        <Controller
                            name="songName"
                            control={control}
                            defaultValue=""
                            // rules={{ required: true }}
                            render={({ field }) => (
                                <TextField
                                    className={classes.input}
                                    id="standard-basic"
                                    label="שם השיר"
                                    variant="standard"
                                    {...field}
                                />
                            )}
                        />

                        <Controller
                            name="artistName"
                            control={control}
                            defaultValue=""
                            // rules={{ requir ed: true }}
                            render={({ field }) => (
                                <FormControl
                                    className={classes.menu}
                                    variant="standard"
                                    // required
                                >
                                    <InputLabel className={classes.titleMenu}>
                                        בחר זמר
                                    </InputLabel>
                                    <Select
                                        {...field}
                                        className={classes.select}
                                        value={selectedUserId}
                                        onChange={handleChange}
                                    >
                                        {artists.map((artist) => {
                                            return (
                                                <MenuItem
                                                    key={artist.id}
                                                    value={artist.id}
                                                >
                                                    {artist.name}
                                                </MenuItem>
                                            );
                                        })}
                                    </Select>
                                </FormControl>
                            )}
                        />
                        <Controller
                            name="duration"
                            control={control}
                            // rules={{ required: true }}
                            render={({ field }) => (
                                <TimeField
                                    onChange={() => handleTimeChange}
                                    // {...field}
                                    className={classes.input}
                                    label="Duration"
                                    variant="standard"
                                    format="HH:mm"
                                />
                            )}
                        />
                        <Button
                            onClick={handleClose}
                            className={classes.btn}
                            variant="contained"
                            type="submit"
                        >
                            צור שיר
                        </Button>
                    </div>
                </form>
            </Dialog>
        </div>
    );
};

export default AddSong;
