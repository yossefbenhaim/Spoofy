import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    sliderContainer: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        backgroundColor: `rgb(112, 106, 106)`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    playSong: {
        width: '40%',
        paddingLeft: '34%',
    },

    titleSong: {
        width: '40%',
        textAlign: 'end',
        marginRight: '2.5%',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    songTime: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: '2.5%',
        marginRight: '2.5%',
        marginBottom: '10px',

        '& .css-1o6dyha-MuiTypography-root': {
            fontSize: '1rem',
            opacity: '1',
        },
    },
    playContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '70%',
    },
    bodySong: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '34%',
    },
    slider: {
        width: '95%',
        padding: '0px',
        color: 'white',
        marginLeft: '2.5%',
        marginBottom: '0.1%',
    },
    sizeIcon: {
        color: 'white',
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
        animation: '$slideUp 5s ease-in-out',
        animationFillMode: 'forwards',
    },
    hideDiv: {
        display: 'none',
    },
    '@keyframes slideUp': {
        '0%': {
            transform: 'translateY(50px)',
            opacity: 0,
        },
        '100%': {
            transform: 'translateY(0)',
            opacity: 1,
        },
    },
    tinyText: {
        fontSize: '1rem',
        color: 'white',
    },
});

export default useStyles;
