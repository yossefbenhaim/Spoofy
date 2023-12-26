import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    drawerContainer: {
        position: 'initial',
        overflowX: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        height: '265px',
        transition: 'width 0.5s',
        borderRadius: '30px',
        '& .MuiPaper-root': {
            backgroundColor: 'rgb(0 0 0 / 30%)',
            backdropFilter: 'blur(10px)',
            overflowX: 'hidden',
            left: 'initial',
            right: '0',
            top: 'initial',
            position: 'initial',
            display: 'flex',
            justifyContent: 'space-between',
            borderRadius: '30px',
            direction: 'ltr',
        },
        '& .MuiListItemText-root': {
            display: 'flex',
            justifyContent: 'end',
        },
    },
    openDrawBtn: {
        display: 'flex',
        marginTop: '15px',
    },
    cheveronIcon: {
        width: '15px',
        '&:hover': {
            backgroundColor: '#fff0',
            transform: 'scale(1.2)',
        },
    },
    listNavButton: {
        paddingLeft: '20px',
        paddingRight: '20px',
        '&:hover': {
            color: theme.palette.common.spoofy,
            backgroundColor: theme.palette.background.buttonColors.active,
            backdropFilter: 'blur(10px)',
            '& .MuiListItemIcon-root': {
                color: theme.palette.common.spoofy,
            },
            '& .MuiListItemText-root': {
                color: theme.palette.common.spoofy,
            },
        },
    },
    iconActive: {
        color: theme.palette.common.spoofy,
        transform: 'scale(1.2)',
    },
    iconActiveText: {
        color: theme.palette.common.spoofy,
    },
    listContainer: {
        width: '100%',
    },
    textBtn: {
        color: theme.palette.common.text,
    },
}));

export default useStyles;
