import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
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
        padding: '15px',
        fontSize: '2rem',
        marginTop: '-12px',
        alignItems: 'center',
        color: theme.palette.common.text,
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
        width: '22%',
        height: '80%',
        paddingTop: '0%',
        marginRight: '1%',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        padding: '1%',
    },

    tableValuse: {
        width: '60%',
        height: '100%',
        marginLeft: '22.5%',
    },
    musicPlayerContainer: {
        height: '16%',
    },
}));

export default useStyles;
