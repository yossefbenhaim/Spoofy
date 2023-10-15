import { makeStyles } from 'tss-react/mui';

const useStylesCommon = makeStyles()((theme) => ({
    headerContainer: {
        height: '10%',
        display: 'flex',
        marginBottom: '2%',
        textAlign: 'center',
        borderRadius: '15px',
        fontFamily: 'system-ui',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.spoofy,
        color: theme.palette.common.white,
    },

    header: {
        marginTop: '-5px',
        fontSize: '2.8rem',
        fontWeight: 'bold',
        color: theme.palette.common.white,
    },

    input: {
        left: 'inherit',
        marginLeft: '2%',
        direction: 'rtl',
        marginRight: '2%',

        '& .MuiFormLabel-root': {
            color: theme.palette.common.white,
        },
        '& .MuiInputBase-input': {
            direction: 'ltr',
            textAlign: 'end',
            color: theme.palette.common.white,
        },
        '& .MuiInputLabel-root': {
            left: 'inherit',
        },
        '& .MuiInput-root:after': {
            borderBottomColor: theme.palette.common.border.BottomAfter,
        },
        '& .MuiInput-root:before': {
            borderBottomColor: theme.palette.common.border.BottomBefore,
        },
        '& .MuiInput-root.Mui-error:before': {
            borderBottomColor: theme.palette.common.border.BottomBefore,
        },
        '& .MuiInputLabel-root.Mui-error': {
            left: 'inherit',
            borderBottomColor: theme.palette.common.border.BottomBefore,
        },
        '& .MuiInputLabel-root.Mui-focused': {
            left: 'inherit',
            color: theme.palette.common.spoofy,
        },
    },

    errorInput: {
        left: 'inherit',
        marginLeft: '2%',
        direction: 'rtl',
        marginRight: '2%',
        color: theme.palette.common.error,

        '& .MuiInputLabel-root': {
            left: 'inherit',
            color: theme.palette.common.error,
        },
        '& .MuiInput-input': {
            direction: 'ltr',
            textAlign: 'end',
            color: theme.palette.common.white,
        },
        '& .MuiInput-root:after': {
            borderBottomColor: theme.palette.common.border.BottomAfter,
        },
        '& .MuiInput-root:before': {
            borderBottomColor: theme.palette.common.border.BottomBefore,
        },
        '& .MuiInput-root.Mui-error:before': {
            borderBottomColor: theme.palette.common.border.BottomBefore,
        },
        '& .MuiInputLabel-root.Mui-error': {
            left: 'inherit',
            borderBottomColor: theme.palette.common.border.BottomError,
        },
    },

    scrollbar: {
        '*::-webkit-scrollbar': {
            width: '10px',
            height: '10px',
            borderRadius: '10px',
        },
        '*::-webkit-scrollbar-track': {
            borderRadius: '10px',
            background: theme.palette.background.scrollbar,
        },
        '*::-webkit-scrollbar-thumb': {
            borderRadius: '10px',
            backgroundColor: theme.palette.common.scrollbar.main,
        },
        '*::-webkit-scrollbar-thumb:hover': {
            borderRadius: '10px',
            backgroundColor: theme.palette.common.scrollbar.hover,
        },
        '*::-webkit-scrollbar-corner': {
            borderRadius: '10px',
            backgroundColor: theme.palette.background.gray,
        },
    },

    submitButtonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },

    submitButton: {
        width: '18%',
        minWidth: '15%',
        fontSize: '1rem',
        transition: '0.6s',
        marginBottom: '3%',
        padding: '3px 16px',
        borderRadius: '30px',
        backgroundSize: '200%',
        color: theme.palette.common.white,
        backgroundImage: theme.palette.background.buttonColors.submit,
        '&:hover': {
            backgroundPosition: 'right',
        },
    },

    addButton: {
        marginTop: '4px',
        fontSize: '1rem',
        transition: '0.6s',
        padding: '2px 18px',
        borderRadius: '20px',
        backgroundSize: '200%',
        color: theme.palette.common.white,
        backgroundImage: theme.palette.background.buttonColors.addButton,
        '&:hover': {
            backgroundPosition: 'right',
        },
    },
}));

export default useStylesCommon;
