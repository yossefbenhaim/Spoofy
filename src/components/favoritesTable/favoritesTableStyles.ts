import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    fieldContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
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
    addSongBtnContainer: {
        height: '8%',
        marginBottom: '1%',
        marginTop: '1%',
        textAlign: 'center',
    },
});

export default useStyles;
