import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    fieldContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },

    addSongBtnContainer: {
        height: '8%',
        marginBottom: '1%',
        marginTop: '1%',
        textAlign: 'center',
    },
});

export default useStyles;
