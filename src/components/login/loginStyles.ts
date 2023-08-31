import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    title: {
        color: `rgb(74, 191, 117)`,
        fontSize: '5rem',
        textShadow: '2px 2px 2px black',
    },
    btn: {
        backgroundImage: 'linear-gradient(to left, #C4E538,#009432,#C4E538)',
        borderRadius: '10px',
        backgroundSize: '200%',
        transition: '0.6s',
        '&:hover': {
            backgroundPosition: 'right',
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
        '& .MuiOutlinedInput-notchedOutline': {
            border: '0px solid',
        },
        '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgb(74, 191, 117)',
            },
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
        width: '17%',
    },
    iconHomeContainer: {
        width: '100%',
    },
    titleNameContainer: {
        width: '100%',
    },
});

export default useStyles;
