import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    menuContainer: {
        '& .MuiList-root': {
            backgroundColor: '#282828',
            color: 'white',
            width: '200px',
            height: '140px',
            padding: '1px',
            direction: 'rtl',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        '& .MuiPaper-root': {
            backgroundColor: 'black',
            top: '70px!important',
        },
    },

    tooltip: {
        backgroundColor: '#282828',
        fontSize: '15px',
        marginLeft: '9px',
    },

    containerIcons: {
        alignItems: 'center',
        fontSize: '15px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    items: {
        border: '0',
        marginTop: '1px',
        marginLeft: '1px',
        marginRight: '1px',
        marginBottom: '0px',
        height: '60px',
        '&:hover': {
            backgroundColor: '#80808063',
            borderRadius: '2px',
            border: '0px',
        },
    },
    disconnect: {
        border: '0',
        borderTop: '1px solid #80808063',
        marginTop: '0px',
        marginLeft: '1px',
        marginRight: '1px',
        marginBottom: '1px',
        fontSize: '15px',
        height: '60px',
        '&:hover': {
            backgroundColor: '#80808063',
            borderRadius: '2px',
            borderTop: '1px solid #80808000',
        },
    },
    icons: {
        fontSize: '18px',
    },
    userIconContainer: {
        width: '10%',
        height: '10%',
        paddingLeft: '40px',
        paddingTop: '25px',
    },

    userIcon: {
        border: '0',
        borderRadius: '30px',
        backgroundColor: 'black',
        color: 'white',
        width: '35px',
        height: '35px',
        '&:hover': {
            transform: 'scale(1.04)',
            backgroundColor: 'black',
        },
    },
}));

export default useStyles;
