import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    dialogContainer: {
        '& .MuiPaper-root ': {
            maxWidth: '800px',
            flexDirection: 'inherit',
        },
    },

    dialog: {
        width: '800px',
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: theme.palette.background.dialog,
    },

    header: {
        height: '10%',
        fontSize: '2.2rem',
        fontWeight: 'bold',
        marginBottom: '2%',
        textAlign: 'center',
        fontFamily: 'system-ui',
        color: theme.palette.common.white,
        backgroundColor: theme.palette.common.spoofy,
    },

    error: {
        float: 'right',
        fontSize: '14px',
        fontWeight: 'bold',
        color: theme.palette.common.error,
    },

    autocomplete: {
        paddingRight: '0px',
        width: '100%!important',
        '& .MuiAutocomplete-endAdornment': {
            right: 'inherit',
        },
        '& .MuiInputBase-root': {
            paddingRight: '0px!important',
        },
    },

    playlistInput: {
        width: '96%',
        marginLeft: '2%',
        '& .MuiFormLabel-root': {
            right: '0',
            left: 'inherit',
            color: theme.palette.common.white,
            '&.Mui-error': {
                color: theme.palette.common.error,
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
            justifyContent: ' flex-end',
            flexDirection: 'row-reverse',
            borderBottomColor: theme.palette.common.border.BottomBefore,
            '&:before': {
                borderBottom: `1px solid ${theme.palette.common.border.BottomBefore}`,
            },
            '&.Mui-error:before': {
                borderBottom: `1px solid ${theme.palette.common.border.BottomBefore}`,
            },
            '&.Mui-error:after': {
                borderBottom: `2px solid ${theme.palette.common.border.BottomError}`,
            },
        },
        '& .MuiInputBase-root:after': {
            borderBottom: `2px solid ${theme.palette.common.spoofy}`,
        },
    },

    checkBoxPlaylists: {
        direction: 'rtl',
    },

    selectedPlaylist: {
        backgroundColor: theme.palette.background.selectedSong,
        marginRight: '0.5%',
        border: `1px solid ${theme.palette.common.black}`,
        '& .MuiSvgIcon-root': {
            color: theme.palette.common.black,
        },
    },
}));

export default useStyles;
