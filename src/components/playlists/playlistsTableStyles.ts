import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    fieldsContainer: {
        gap: '3%',
        height: '75%',
        display: 'flex',
        flexWrap: 'wrap',
        direction: 'rtl',
        overflowY: 'auto',
        flexDirection: 'row',

        '::-webkit-scrollbar': {
            width: '10px',
            height: '10px',
            borderRadius: '10px',
        },
        '::-webkit-scrollbar-track': {
            borderRadius: '10px',
            background: theme.palette.background.scrollbar,
        },
        '::-webkit-scrollbar-thumb': {
            borderRadius: '10px',
            backgroundColor: theme.palette.common.scrollbar.main,
        },
        '::-webkit-scrollbar-thumb:hover': {
            borderRadius: '10px',
            backgroundColor: theme.palette.common.scrollbar.hover,
        },
        '::-webkit-scrollbar-corner': {
            borderRadius: '10px',
            backgroundColor: theme.palette.background.gray,
        },
    },
    container: {
        width: '99%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    namePlaylistContainer: {
        display: 'flex',
        direction: 'rtl',
        flexDirection: 'column',
    },
    playlistTable: {
        width: '100%',
        height: '338px',
    },

    headerTable: {
        display: 'flex',
        direction: 'ltr',
        marginRight: '2%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'end',
        color: theme.palette.common.white,
    },
    namePlaylist: {
        fontWeight: 'bold',
    },
    editBtn: {
        marginRight: '1%',
        color: theme.palette.common.white,
        '&:hover': {
            color: theme.palette.common.spoofy,
        },
    },

    addSongBtnContainer: {
        height: '8%',
        marginTop: '1%',
        marginBottom: '1%',
        textAlign: 'center',
    },
}));

export default useStyles;
