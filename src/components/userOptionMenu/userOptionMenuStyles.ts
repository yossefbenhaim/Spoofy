import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    title: {
        textAlign: 'end',
        marginRight: '5%',
        color: theme.palette.common.white,
    },
    userIconContainer: {
        width: '10%',
        height: '10%',
        padding: '20px',
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
    body: {
        textAlign: 'center',
    },
    fieldsContainer: {
        width: '150px',
        height: '200px',
        display: 'flex',
        marginTop: '60px',
        marginLeft: '20px',
        borderRadius: '8px',
        flexDirection: 'column',
        justifyContent: 'space-around',
        position: 'absolute',
        border: `2px solid ${theme.palette.common.white}`,
    },
    btnDisconect: {
        margin: '5px',
        lineHeight: '1',
        minWidth: '106px',
        padding: '3px 10px',
        borderRadius: '20px',
        color: theme.palette.common.white,
        border: `2px solid ${theme.palette.background.buttonColors.disconect}`,
        backgroundColor: theme.palette.background.buttonColors.disconect,
        '&:hover': {
            backgroundColor: theme.palette.common.white,
            color: theme.palette.background.buttonColors.disconect,
            border: `2px solid ${theme.palette.background.buttonColors.disconect}`,
        },
    },
    btnDelete: {
        margin: '5px',
        lineHeight: '1',
        minWidth: '106px',
        padding: '3px 10px',
        borderRadius: '20px',
        border: `2px solid ${theme.palette.background.buttonColors.delete}`,
        backgroundColor: theme.palette.background.buttonColors.delete,
        color: theme.palette.common.white,
        '&:hover': {
            color: theme.palette.background.buttonColors.delete,
            backgroundColor: theme.palette.common.white,
        },
    },
    exitAccountContainer: {
        '& .MuiPaper-root': {
            width: '50%',
            height: '20%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: theme.palette.background.gray,
            justifyContent: 'space-between',
        },
    },
    exitAccountTitle: {
        textAlign: 'right',
        color: theme.palette.common.white,
        backgroundColor: theme.palette.background.spoofy,
    },
    exitAccountContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    exitBtn: {
        margin: '5px',
        lineHeight: '1',
        minWidth: '106px',
        padding: '3px 10px',
        borderRadius: '20px',
        color: theme.palette.common.white,
        border: `2px solid ${theme.palette.common.white}`,
        backgroundColor: theme.palette.background.spoofy,
        '&:hover': {
            color: theme.palette.common.spoofy,
            backgroundColor: theme.palette.common.white,
            border: `2px solid ${theme.palette.common.spoofy}`,
        },
    },
}));

export default useStyles;
