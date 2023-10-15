import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    sliderContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: theme.palette.background.selectUser,
    },

    playSong: {
        width: '40%',
        paddingLeft: '34%',
    },

    titleSong: {
        width: '40%',
        display: 'flex',
        textAlign: 'end',
        marginRight: '2.5%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        color: theme.palette.common.white,
    },

    songTime: {
        height: '100%',
        display: 'flex',
        marginLeft: '2.5%',
        marginRight: '2.5%',
        alignItems: 'center',
        marginBottom: '10px',
        justifyContent: 'space-between',
        '& .MuiTypography-root': {
            fontSize: '1rem',
            opacity: '1',
        },
    },

    playContainer: {
        height: '70%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    bodySong: {
        height: '34%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    slider: {
        width: '95%',
        padding: '0px',
        marginLeft: '2.5%',
        marginBottom: '0.1%',
        color: theme.palette.common.white,
    },

    sizeIcon: {
        color: theme.palette.common.white,
    },

    sizeSvg: {
        fontSize: '9vh',
    },

    songSize: {
        fontSize: '1.8rem',
    },

    artistSize: {
        marginBottom: '16px',
    },

    showDiv: {
        animationFillMode: 'forwards',
        animation: '$slideUp 5s ease-in-out',
    },

    hideDiv: {
        display: 'none',
    },

    '@keyframes slideUp': {
        '0%': {
            opacity: 0,
            transform: 'translateY(50px)',
        },
        '100%': {
            opacity: 1,
            transform: 'translateY(0)',
        },
    },

    tinyText: {
        fontSize: '1rem',
        color: theme.palette.common.white,
    },
}));

export default useStyles;
