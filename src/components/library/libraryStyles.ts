import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    fieldsContainer: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        width: '100%',
        height: '10%',
    },
    titleContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        padding: '15px',
        fontSize: '2rem',
        color: 'white',
        marginTop: '-12px',
    },
    logo: {
        marginRight: '4px',
    },
    textLogo: {
        fontSize: '30px',
    },
    navigation: {
        width: '100%',
        height: '74%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonsContainer: {
        height: '100%',
        paddingTop: '0%',
        marginRight: '1%',
        width: '12%',
    },
    content: { width: '80%', height: '100%', backgroundColor: 'green' },

    tableValuse: {
        width: '55%',
        marginLeft: '22.5%',
        height: '100%',
    },
    musicPlayerContainer: {
        height: '16%',
    },
});

export default useStyles;
