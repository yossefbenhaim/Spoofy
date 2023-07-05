import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    fieldsContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: '75%',
        gap: '3%',
        overflowY: 'auto',
        flexWrap: 'wrap',
        direction: 'rtl',

        '::-webkit-scrollbar': {
            backgroundColor: '#7ead7b78',
            width: '10px',
            height: '10px',
            borderRadius: '10px',
        },
        '::-webkit-scrollbar-track': {
            background: 'rgb(142 146 143)',
            borderRadius: '10px',
        },
        '::-webkit-scrollbar-thumb': {
            borderRadius: '10px',
            backgroundColor: '#29c029',
        },
        '::-webkit-scrollbar-thumb:hover': {
            borderRadius: '10px',
            backgroundColor: '#41dc41',
        },
        '::-webkit-scrollbar-corner': {
            backgroundColor: 'gray',
            borderRadius: '10px',
        },
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100%',
        width: '99%',
    },
    namePlaylistContainer: {
        display: 'flex',
        flexDirection: 'column',
        direction: 'rtl',
    },
    playlistTable: {
        height: '336px',
        width: '100%',
    },

    headerTable: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'end',
        color: 'white',
        alignItems: 'center',
        marginRight: '2%',
        direction: 'ltr',
    },
    namePlaylist: {
        fontWeight: 'bold',
    },
    nameCreator: {},
    editBtn: {
        marginRight: '1%',
        color: 'white',
        '&:hover': {
            color: 'rgb(74, 191, 117)',
        },
    },

    addSongBtnContainer: {
        height: '8%',
        marginBottom: '1%',
        marginTop: '1%',
        textAlign: 'center',
    },
    addSongBtn: {
        marginTop: '4px',
        padding: '2px 18px',
        borderRadius: '20px',
        border: `2px solid rgb(185,172,172)`,
        backgroundColor: `rgb(185, 172, 172)`,
        '&:hover': {
            backgroundColor: 'white',
            color: `rgb(185, 172, 172)`,
            border: `2px solid rgb(185, 172, 172)`,
        },
    },
});

export default useStyles;
