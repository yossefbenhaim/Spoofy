import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    exitAccountContainer: {
        '& .MuiPaper-root': {
            width: '50%',
            height: '20%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: theme.palette.background.deleteUser.card,
            backdropFilter: 'blur(3px)',
            alignItems: 'center',
        },
    },
    exitAccountTitle: {
        textAlign: 'right',
        width: '85%',
        alignItems: 'center',
        textAlignLast: 'center',
        color: theme.palette.common.white,
        borderBottom: theme.palette.background.deleteUser.borderButtom,
    },
    exitAccountContent: {
        width: '30%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    exitBtn: {
        justifyContent: 'space-between',
        marginTop: '4px',
        fontSize: '1rem',
        transition: '0.6s',
        padding: '2px 18px',
        borderRadius: '20px',
        backgroundSize: '200%',
        maxHeight: '35px',
        minWidth: '12%',
        border: '1px solid black',
        color: theme.palette.common.buttonColor.text,
        backgroundImage: theme.palette.background.buttonColors.delete,
        '&:hover': {
            backgroundPosition: 'right',
        },
    },
}));

export default useStyles;
