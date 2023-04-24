import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import useStyles from './loginStyles';
import { Button, MenuItem, Typography } from '@mui/material';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { setUser } from 'redux/slice/currentUser';
import { useDispatch } from 'react-redux';
import GET_USERS from 'queries/query/getAllUser';
import User from 'models/interface/user';

const Login: React.FC = () => {
    const { classes } = useStyles();
    const [selectedUserId, setSelectedUserId] = useState<string>('');
    const [users, setUsers] = useState<User[]>([]);
    const dispatch = useDispatch();
    const navigatoin = useNavigate();

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedUserId(event.target.value as string);
        const user: any = users.find((user) => user.id === event.target.value);
        dispatch(
            setUser({
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
            })
        );
    };

    useQuery(GET_USERS, {
        onCompleted: (data) => {
            setUsers(data.allUsers.nodes);
        },
    });
    const homeNavigation = () => {
        if (selectedUserId) {
            navigatoin('firstPage/songs');
        }
    };

    return (
        <div className={classes.fieldsContainer}>
            <Typography className={classes.title}>Musify</Typography>
            <FormControl className={classes.menu} fullWidth>
                <InputLabel
                    className={classes.titleMenu}
                    id="demo-simple-select-label"
                >
                    בחר משתמש להתחברות
                </InputLabel>
                <Select
                    className={classes.select}
                    value={selectedUserId}
                    label="בחר משתמש להתחברות"
                    onChange={handleChange}
                >
                    {users.map((user) => {
                        return (
                            <MenuItem key={user.id} value={user.id}>
                                {user.firstName + ' ' + user.lastName}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
            <Button
                onClick={homeNavigation}
                className={classes.btn}
                variant="contained"
            >
                התחבר
            </Button>
        </div>
    );
};

export default Login;
