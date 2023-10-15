import { makeStyles } from 'tss-react/mui';

const useStylesCommon = makeStyles()((theme) => ({
    headerContainer: {
        marginBottom: '2%',
        textAlign: 'center',
        borderRadius: '15px',
        height: '10%',
        fontFamily: 'system-ui',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.spoofy,
        color: theme.palette.common.white,
    },

    header: {
        color: 'white',
        fontSize: '2.8rem',
        fontWeight: 'bold',
        marginTop: '-5px',
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
            borderBottomColor: theme.palette.common.borderBottomAfter,
        },
        '& .MuiInput-root:before': {
            borderBottomColor: theme.palette.common.borderBottomBefore,
        },
        '& .MuiInput-root.Mui-error:before': {
            borderBottomColor: theme.palette.common.borderBottomBefore,
        },
        '& .MuiInputLabel-root.Mui-error': {
            borderBottomColor: theme.palette.common.borderBottomBefore,
            left: 'inherit',
        },
        '& .MuiInputLabel-root.Mui-focused': {
            left: 'inherit',
            color: theme.palette.common.spoofy,
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
            borderBottomColor: theme.palette.common.borderBottomAfter,
        },
        '& .MuiInput-root:before': {
            borderBottomColor: theme.palette.common.borderBottomBefore,
        },
        '& .MuiInput-root.Mui-error:before': {
            borderBottomColor: theme.palette.common.borderBottomBefore,
        },
        '& .MuiInputLabel-root.Mui-error': {
            borderBottomColor: theme.palette.common.borderBottomError,
            left: 'inherit',
        },
    },

    scrollbar: {
        '*::-webkit-scrollbar': {
            backgroundColor: '#7ead7b78',
            width: '10px',
            height: '10px',
            borderRadius: '10px',
        },
        '*::-webkit-scrollbar-track': {
            background: 'rgb(142 146 143)',
            borderRadius: '10px',
        },
        '*::-webkit-scrollbar-thumb': {
            borderRadius: '10px',
            backgroundColor: '#29c029',
        },
        '*::-webkit-scrollbar-thumb:hover': {
            borderRadius: '10px',
            backgroundColor: '#41dc41',
        },
        '*::-webkit-scrollbar-corner': {
            backgroundColor: 'gray',
            borderRadius: '10px',
        },
    },

    submitButtonContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    submitButton: {
        borderRadius: '30px',
        minWidth: '15%',
        width: '18%',
        color: 'white',
        marginBottom: '3%',
        fontSize: '1rem',
        padding: '3px 16px',
        backgroundSize: '200%',
        transition: '0.6s',
        backgroundImage: theme.palette.background.buttonColors.submit,
        '&:hover': {
            backgroundPosition: 'right',
        },
    },

    addButton: {
        marginTop: '4px',
        padding: '2px 18px',
        borderRadius: '20px',
        fontSize: '1rem',
        color: 'white',
        backgroundSize: '200%',
        transition: '0.6s',
        backgroundImage: theme.palette.background.buttonColors.addButton,
        '&:hover': {
            backgroundPosition: 'right',
        },
    },
}));

export default useStylesCommon;
