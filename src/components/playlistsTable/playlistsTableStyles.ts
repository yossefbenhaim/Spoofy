import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    fieldsContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        gap: '5%',
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
});

export default useStyles;
