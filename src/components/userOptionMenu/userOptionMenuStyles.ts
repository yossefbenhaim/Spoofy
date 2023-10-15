import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    title: {
        color: 'white',
        textAlign: 'end',
        marginRight: '5%',
    },
    body: {
        textAlign: 'center',
    },
    fieldsContainer: {
        marginLeft: '1.5%',
        marginTop: '0.5%',
        border: '2px solid white',
        borderRadius: '8px',
        width: '235px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    btnDisconect: {
        padding: '3px 10px',
        color: 'white',
        margin: '5px',
        borderRadius: '20px',
        minWidth: '106px',
        lineHeight: '1',
        border: `2px solid rgb(130, 130, 124)`,
        backgroundColor: `rgb(130, 130, 124)`,
        '&:hover': {
            backgroundColor: 'white',
            color: `rgb(130, 130, 124)`,
            border: `2px solid rgb(130, 130, 124)`,
        },
    },
    btnDelete: {
        padding: '3px 10px',
        margin: '5px',
        borderRadius: '20px',
        minWidth: '106px',
        lineHeight: '1',
        border: `2px solid rgb(191, 90, 74)`,
        backgroundColor: `rgb(191, 90, 74)`,
        color: 'white',
        '&:hover': {
            color: `rgb(191, 90, 74)`,
            backgroundColor: 'white',
        },
    },
    exitAccountContainer: {
        '& .MuiPaper-root': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '50%',
            height: '20%',
            backgroundColor: 'gray',
        },
    },
    exitAccountTitle: {
        color: 'white',
        textAlign: 'right',
        backgroundColor: theme.palette.background.spoofy,
    },
    exitAccountContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    exitBtn: {
        padding: '3px 10px',
        margin: '5px',
        borderRadius: '20px',
        minWidth: '106px',
        lineHeight: '1',
        border: `2px solid white`,
        backgroundColor: theme.palette.background.spoofy,
        color: 'white',
        '&:hover': {
            backgroundColor: 'white',
            color: theme.palette.common.spoofy,
            border: `2px solid ${theme.palette.common.spoofy}`,
        },
    },
}));

export default useStyles;
