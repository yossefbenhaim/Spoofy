import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    addSongBtn: {
        marginTop: '4px',
        padding: '2px 18px',
        borderRadius: '20px',
        border: `2px solid rgb(185,172,172)`,
        backgroundColor: `rgb(185, 172, 172)`,

        '&:hover': {
            backgroundColor: 'white',
            color: `rgb(185, 172, 172)`,
            border: `2px solid rgb(185, 172, 172)`,
        },
    },

    dialogContainer: {
        '& .MuiPaper-root ': {
            maxWidth: '800px',
            flexDirection: 'inherit',
        },
    },

    dialog: {
        backgroundColor: theme.palette.background.dialog,
        width: '800px',
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    header: {
        marginBottom: '2%',
        textAlign: 'center',
        height: '10%',
        backgroundColor: theme.palette.common.spoofy,
        color: 'white',
        fontSize: '2.2rem',
        fontWeight: 'bold',
        fontFamily: 'system-ui',
    },

    error: {
        color: ' #ff0000 ',
        float: 'right',
        fontWeight: 'bold',
        fontSize: '14px',
    },

    autocomplete: {
        width: '100%!important',
        paddingRight: '0px',

        '& .MuiAutocomplete-endAdornment': {
            right: 'inherit',
        },
        '& .MuiInputBase-root': {
            paddingRight: '0px!important',
        },
    },

    songsInput: {
        width: '96%',
        marginLeft: '2%',

        '& .MuiFormLabel-root': {
            color: 'white',
            right: '0',
            left: 'inherit',
            '&.Mui-error': {
                color: '#d32f2f',
            },
        },
        '& .MuiFormLabel-root.Mui-focused': {
            color: theme.palette.common.spoofy,
        },
        '& .MuiInputBase-input ': {
            direction: 'rtl',
        },
        '& .MuiInputBase-input:focus ': {
            marginRight: '0px',
        },
        '& .MuiInputBase-root': {
            paddingRight: '0px',
            flexDirection: 'row-reverse',
            justifyContent: ' flex-end',
            borderBottomColor: theme.palette.common.borderBottomBefore,

            '&:before': {
                borderBottom: `1px solid ${theme.palette.common.borderBottomBefore}`,
            },
            '&.Mui-error:before': {
                borderBottom: `1px solid ${theme.palette.common.borderBottomBefore}`,
            },
            '&.Mui-error:after': {
                borderBottom: '2px solid #d32f2f',
            },
        },
        '& .MuiInputBase-root:after': {
            borderBottom: `2px solid ${theme.palette.common.spoofy}`,
        },
    },

    checkBoxSongs: {
        direction: 'rtl',
    },

    selectedSong: {
        backgroundColor: 'rgb(75, 218, 128)',
        marginRight: '0.5%',
        border: '1px solid black',
        '& .MuiSvgIcon-root': {
            color: 'black',
        },
    },
}));

export default useStyles;
