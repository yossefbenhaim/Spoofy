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
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

const AddSong: React.FC = () => {
    const { classes } = useStyles();
    const [open, setOpen] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState<string>('');
    const [artists, setArtists] = useState<Artist[]>([]);
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedUserId(event.target.value as string);
    };

    useQuery(GET_ALL_ARTIST, {
        onCompleted: (data) => {
            console.log(data);

            // setArtists(data.allArtists.nodes);
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
                <div className={classes.dialog}>
                    <div className={classes.header}>יצירת שיר</div>
                    <TextField
                        className={classes.input}
                        id="standard-basic"
                        label="שם השיר"
                        variant="standard"
                    />
                    <FormControl className={classes.menu} variant="standard">
                        <InputLabel className={classes.titleMenu}>
                            בחר זמר
                        </InputLabel>
                        <Select
                            className={classes.select}
                            value={selectedUserId}
                            label="בחר משתמש להתחברות"
                            onChange={handleChange}
                        >
                            {artists.map((artist) => {
                                return (
                                    <MenuItem key={artist.id} value={artist.id}>
                                        {artist.name}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>

                    <TextField
                        className={classes.input}
                        id="standard-basic"
                        label="משך השיר"
                        variant="standard"
                    />
                    <Button
                        onClick={handleClose}
                        className={classes.btn}
                        variant="contained"
                    >
                        צור שיר
                    </Button>
                </div>
            </Dialog>
        </div>
    );
};

export default AddSong;
