import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
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
