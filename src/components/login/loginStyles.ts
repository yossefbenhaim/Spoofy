import { makeStyles } from 'tss-react/mui';
import a from '../../public/loginBackground.png';
const useStyles = makeStyles()((theme) => ({
    title: {
        fontSize: '5rem',
        textShadow: '2px 2px 2px black',
        color: theme.palette.common.spoofy,
    },
    btn: {
        transition: '0.6s',
        borderRadius: '10px',
        backgroundSize: '200%',
        backgroundImage: theme.palette.background.buttonColors.submit,
        '&:hover': {
            backgroundPosition: 'right',
        },
    },
    fieldsContainer: {
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundImage: theme.palette.background.loginImage,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        overflow: 'hidden',
    },
    formControl: {
        minWidth: 120,
        margin: '40px',
        width: '220px',
        display: 'flex',
        alignContent: 'center',
        flexDirection: 'row-reverse',
        '& .MuiFormLabel-root': {
            transformOrigin: 'top right',
            left: '30px',
            '&.Mui-focused': {
                left: '30px',
                transformOrigin: 'top right',
                color: theme.palette.common.text,
            },
        },
        '& .MuiOutlinedInput-notchedOutline legend': {
            marginLeft: '68px',
        },
    },
    titleMenu: {
        left: '38px',
        color: theme.palette.common.text,
    },
    select: {
        width: '220px',
        borderRadius: '17px',
        color: theme.palette.common.text,
        backgroundColor: theme.palette.background.selectUser,
        '& .MuiSelect-icon': {
            left: '7px',
            color: theme.palette.common.text,
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
                borderColor: theme.palette.common.spoofy,
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
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    iconHomeContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    },
    titleNameContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    },
}));

export default useStyles;
