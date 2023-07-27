import { makeStyles } from 'tss-react/mui';

const useStylesCommon = makeStyles()({
    headerContainer: {
        marginBottom: '2%',
        textAlign: 'center',
        borderRadius: '15px',
        height: '10%',
        backgroundColor: `rgb(74, 191, 117)`,
        color: 'white',
        fontFamily: 'system-ui',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
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
});

export default useStylesCommon;
