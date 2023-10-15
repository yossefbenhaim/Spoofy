import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    fieldContainer: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
    },

    addSongBtnContainer: {
        height: '8%',
        marginTop: '1%',
        marginBottom: '1%',
        textAlign: 'center',
    },
});

export default useStyles;
