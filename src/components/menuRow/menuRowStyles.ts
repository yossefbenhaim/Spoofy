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
        height: '41%',

        '& .MuiPaper-root': {
            marginRight: '0%',
            width: '10%',
            backgroundColor: 'gray',
            direction: 'rtl',
        },
        '& .MuiList-root': {
            paddingTop: '0px',
            paddingBottom: '1px',
        },
    },
});

export default useStyles;
