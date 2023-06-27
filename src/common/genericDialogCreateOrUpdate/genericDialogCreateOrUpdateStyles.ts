import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
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
        backgroundColor: `rgb(118, 118, 118)`,
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
        backgroundColor: `rgb(74, 191, 117)`,
        color: 'white',
        fontSize: '2.2rem',
        fontWeight: 'bold',
        fontFamily: 'system-ui',
    },
    select: {
        color: `rgb(255, 255, 255)`,
        borderBottomColor: '#16b754',
        '& .MuiInput-input:focus': {
            backgroundColor: `rgb(118, 118, 118)`,
        },
        '&.Mui-focused:after': {
            borderBottomColor: '#16b754',
        },
        '&:before': {
            borderBottom: '1px solid black',
        },

        '&:after': {
            borderBottomColor: '#16b754',
        },
        '& .MuiInputLabel-root.Mui-error': {
            borderBottomColor: 'red',
            left: 'inherit',
        },

        '& .MuiSelect-icon': {
            position: 'unset',
            color: `rgb(255, 255, 255)`,
        },

        '& .MuiSelect-select': {
            paddingRight: '0px!important',
        },
    },

    input: {
        marginLeft: '2%',
        marginRight: '2%',
        direction: 'rtl',
        left: 'inherit',

        '& .MuiFormLabel-root': {
            color: 'rgb(255,255,255)',
        },
        '& .MuiInputBase-input': {
            direction: 'ltr',
            textAlign: 'end',
            color: `rgb(255, 255, 255)`,
        },
        '& .MuiInputLabel-root': {
            left: 'inherit',
        },
        '& .MuiInput-root:after': {
            borderBottomColor: '#16b754',
        },
        '& .MuiInput-root:before': {
            borderBottomColor: 'black',
        },
        '& .MuiInput-root.Mui-error:before': {
            borderBottomColor: 'black',
        },
        '& .MuiInputLabel-root.Mui-error': {
            borderBottomColor: 'black',
            left: 'inherit',
        },

        '& .MuiInputLabel-root.Mui-focused': {
            left: 'inherit',
            color: `rgb(74, 191, 117)`,
        },
    },

    errorInput: {
        marginLeft: '2%',
        marginRight: '2%',
        direction: 'rtl',
        left: 'inherit',
        color: '#ff0000',
        '& .MuiInputLabel-root': {
            left: 'inherit',
            color: '#ff0000',
        },
        '& .MuiInput-input': {
            direction: 'ltr',
            textAlign: 'end',
            color: `rgb(255, 255, 255)`,
        },

        '& .MuiInput-root:after': {
            borderBottomColor: '#16b754',
        },
        '& .MuiInput-root:before': {
            borderBottomColor: 'black',
        },
        '& .MuiInput-root.Mui-error:before': {
            borderBottomColor: 'black',
        },
        '& .MuiInputLabel-root.Mui-error': {
            borderBottomColor: 'black',
            left: 'inherit',
        },
    },

    menu: {
        marginLeft: '2%',
        marginRight: '2%',
        direction: 'rtl',
    },

    titleMenu: {
        left: 'inherit',
        color: 'rgb(255,255,255)',
        '&.Mui-focused': {
            color: `rgb(74, 191, 117)!important`,
        },
    },

    menuItem: {
        direction: 'rtl',
    },

    error: {
        color: ' #ff0000 ',
        float: 'right',
        fontWeight: 'bold',
        fontSize: '14px',
    },

    submitButton: {
        backgroundColor: `rgb(70, 138, 41)`,
        borderRadius: '30px',
        minWidth: '15%',
        width: '15%',
        marginLeft: '44%',
        marginBottom: '3%',
        fontSize: '1rem',
        padding: '3px 16px',
        '&:hover': {
            backgroundColor: `rgb(80, 160, 60)`,
        },
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
            color: 'rgb(74, 191, 117)',
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
            borderBottomColor: 'black',

            '&:before': {
                borderBottom: '1px solid black',
            },
            '&.Mui-error:before': {
                borderBottom: '1px solid black',
            },
            '&.Mui-error:after': {
                borderBottom: '2px solid #d32f2f',
            },
        },
        '& .MuiInputBase-root:after': {
            borderBottom: '2px solid rgb(74, 191, 117)',
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
});

export default useStyles;
