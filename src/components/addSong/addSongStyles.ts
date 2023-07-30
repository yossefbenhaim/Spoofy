import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    dialogContainer: {
        '& .MuiPaper-root ': {
            maxWidth: '800px',
            flexDirection: 'inherit',
        },
    },
    dialog: {
        backgroundColor: `rgb(118, 118, 118)`,
        width: '800px',
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    header: {
        marginBottom: '2%',
        textAlign: 'center',
        height: '10%',
        backgroundColor: `rgb(74, 191, 117)`,
        color: 'white',
        fontSize: '2.2rem',
        fontWeight: 'bold',
        fontFamily: 'system-ui',
    },
    select: {
        color: `rgb(255, 255, 255)`,
        borderBottomColor: '#16b754',
        '& .MuiInput-input:focus': {
            backgroundColor: `rgb(118, 118, 118)`,
        },
        '&.Mui-focused:after': {
            borderBottomColor: '#16b754',
        },
        '&:before': {
            borderBottom: '1px solid black',
        },

        '&:after': {
            borderBottomColor: '#16b754',
        },
        '& .MuiInputLabel-root.Mui-error': {
            borderBottomColor: 'red',
            left: 'inherit',
        },

        '& .MuiSelect-icon': {
            position: 'unset',
            color: `rgb(255, 255, 255)`,
        },

        '& .MuiSelect-select': {
            paddingRight: '0px!important',
        },
    },

    menu: {
        marginLeft: '2%',
        marginRight: '2%',
        direction: 'rtl',
    },

    titleMenu: {
        left: 'inherit',
        color: 'rgb(255,255,255)',
        '&.Mui-focused': {
            color: `rgb(74, 191, 117)!important`,
        },
    },

    menuItem: {
        direction: 'rtl',
    },

    error: {
        color: ' #ff0000 ',
        float: 'right',
        fontWeight: 'bold',
        fontSize: '14px',
    },
});

export default useStyles;
