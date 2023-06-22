import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    fieldsContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: '75%',
        gap: '2%',
        overflowY: 'auto',
        flexWrap: 'wrap',
        '::-webkit-scrollbar': {
            backgroundColor: '#7ead7b78',
            width: '10px',
            height: '10px',
            borderRadius: '10px',
        },
        '::-webkit-scrollbar-track': {
            background: 'gray',
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
        justifyContent: 'space-between',
        height: '77%',
        width: '99%',
    },
    playlistTable: {
        height: '100%',
        width: '100%',
    },

    headerTable: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'end',
        color: 'white',
        alignItems: 'center',
        marginRight: '2%',
    },
    namePlaylist: {
        fontWeight: 'bold',
    },
    editBtn: {
        marginRight: '1%',
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
