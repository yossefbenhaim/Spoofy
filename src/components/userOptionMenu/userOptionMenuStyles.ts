import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    menuContainer: {
        '& .MuiList-root': {
            backgroundColor: theme.palette.background.nemuProfile.menu,
            color: theme.palette.common.nemuProfile.text,
            width: '200px',
            height: '140px',
            padding: '1px',
            direction: 'rtl',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        '& .MuiPaper-root': {
            backgroundColor: theme.palette.background.nemuProfile.menu,
            top: '70px!important',
        },
    },

    tooltip: {
        backgroundColor: theme.palette.background.nemuProfile.tooltip,
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
            backgroundColor: theme.palette.background.nemuProfile.hoverMenu,
            borderRadius: '2px',
            border: '0px',
        },
    },
    disconnect: {
        border: '0',
        borderTop: theme.palette.background.nemuProfile.boundaryLine,
        marginTop: '0px',
        marginLeft: '1px',
        marginRight: '1px',
        marginBottom: '1px',
        fontSize: '15px',
        height: '60px',
        '&:hover': {
            backgroundColor: theme.palette.background.nemuProfile.hoverMenu,
            borderRadius: '2px',
            borderTop: theme.palette.common.nemuProfile.borderTop,
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
        backgroundColor: theme.palette.background.nemuProfile.icon,
        color: theme.palette.common.profile.text,
        width: '35px',
        height: '35px',
        '&:hover': {
            transform: 'scale(1.04)',
            backgroundColor: theme.palette.background.nemuProfile.icon,
        },
        '& .MuiSvgIcon-root': {
            color: theme.palette.common.buttonColor.text,
        },
    },
}));

export default useStyles;
