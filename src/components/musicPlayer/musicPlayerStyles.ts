import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    slide: {},

    sliderContainer: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        backgroundColor: `rgb(${112}, ${106}, ${106})`,
    },
    playContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    playSong: {
        width: '100%',
        marginLeft: ' 10.5%',
        marginBottom: '-15px',
    },
    titleSong: {
        width: '10%',
        textAlign: 'end',
        marginRight: '2.5%',
        color: 'white',
    },
    songTime: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        mt: -2,
        marginLeft: '2.5%',
        marginRight: '2.5%',
        marginBottom: '10px',
        '& .css-1o6dyha-MuiTypography-root': {
            fontSize: '1rem',
            opacity: '1',
        },
    },
    slider: {
        width: '95%',
        padding: '0px',
        color: 'white',
    },
    sizeIcon: {
        color: 'white',
    },
    sizeSvg: {
        fontSize: '3rem',
    },
    artistSize: {
        fontSize: '1rem',
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

// `rgb(${redValue}, ${greenValue}, ${blueValue})`
