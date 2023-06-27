import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    title: {
        color: `rgb(74, 191, 117)`,
        fontSize: '5rem',
        textShadow: '2px 2px 2px black',
    },
    btn: {
        backgroundColor: `rgb(70, 138, 41)`,
        borderRadius: '10px',
        '&:hover': {
            backgroundColor: `rgb(21, 162, 49)`,
        },
    },
    fieldsContainer: {
        backgroundColor: `rgb(80, 77, 77)`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '705px',
    },
    formControl: {
        margin: '40px',
        alignContent: 'center',
        minWidth: 120,
        width: '220px',
        display: 'flex',
        flexDirection: 'row-reverse',
        '& .MuiFormLabel-root': {
            transformOrigin: 'top right',
            left: '30px',
            '&.Mui-focused': {
                color: 'white',
                transformOrigin: 'top right',
                left: '30px',
            },
        },
        '& .MuiOutlinedInput-notchedOutline legend': {
            marginLeft: '68px',
        },
    },
    titleMenu: {
        left: '38px',
        color: 'white',
    },
    select: {
        width: '220px',
        backgroundColor: `rgb(112, 106, 106)`,
        borderRadius: '17px',
        color: `rgb(255, 255, 255)`,
        '& .MuiSelect-icon': {
            left: '7px',
            color: 'white',
        },
        '& .MuiInputBase-root': {
            borderRadius: '17px',
        },

        '& .MuiOutlinedInput-input': {
            padding: '16.5px 55px',
        },
    },
    menuItem: {
        direction: 'rtl',
    },
    lottieStyle: {
        width: '200px',
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '15%',
    },
    iconHomeContainer: {
        width: '100%',
    },
    titleNameContainer: {
        width: '100%',
    },
});

export default useStyles;
