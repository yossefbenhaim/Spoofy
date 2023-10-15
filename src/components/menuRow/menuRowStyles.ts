import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    addIcon: {
        color: theme.palette.common.white,
    },

    item: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.gray,
        color: theme.palette.common.white,
        '&:hover': {
            color: theme.palette.common.black,
            backgroundColor: theme.palette.background.gray,
        },
    },

    menuTitle: {
        top: '0',
        zIndex: '1',
        height: '50px',
        display: 'flex',
        position: 'sticky',
        fontWeight: 'bold',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.gray,
        justifyContent: 'center',
        textDecoration: 'underline',
        color: theme.palette.common.white,
        borderBottom: `2px solid ${theme.palette.common.white}`,
    },

    menuContainer: {
        height: '41%',
        textAlignLast: 'center',
        '& .MuiPaper-root': {
            width: '10%',
            direction: 'rtl',
            marginRight: '0%',
            backgroundColor: theme.palette.background.gray,
        },
        '& .MuiList-root': {
            paddingTop: '0px',
            paddingBottom: '1px',
        },
    },
}));

export default useStyles;
