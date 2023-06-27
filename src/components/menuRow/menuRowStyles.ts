import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    addIcon: {
        color: 'white',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'gray',
        color: 'white',

        '&:hover': {
            backgroundColor: 'gray',
            color: 'black',
        },
    },
    menuTitle: {
        fontWeight: 'bold',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '50px',
        backgroundColor: 'gray',
        color: 'white',
        textDecoration: 'underline',
        borderBottom: '2px solid white',

        top: '0',
        position: 'sticky',
        zIndex: '1',
    },
    menuContainer: {
        textAlignLast: 'center',
        height: '32%',

        '& .MuiPaper-root': {
            marginRight: '0%',
            width: '10%',
            '::-webkit-scrollbar': {
                backgroundColor: '#7ead7b78',
                width: '10px',
                height: '10px',
                borderRadius: '10px',
            },
            '::-webkit-scrollbar-track': {
                background: 'rgb(142 146 143)',
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
        '& .MuiList-root': {
            paddingTop: '0px',
            paddingBottom: '1px',
        },
    },
});

export default useStyles;
