import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    dialogContainer: {
        '& .MuiPaper-root ': {
            maxWidth: '800px',
            flexDirection: 'inherit',
        },
    },

    dialog: {
        width: '800px',
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: theme.palette.background.dialog,
    },

    header: {
        height: '10%',
        fontSize: '2.2rem',
        marginBottom: '2%',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'system-ui',
        color: theme.palette.common.white,
        backgroundColor: theme.palette.background.spoofy,
    },

    select: {
        color: theme.palette.common.white,
        borderBottomColor: theme.palette.common.border.BottomAfter,
        '& .MuiInput-input:focus': {
            backgroundColor: theme.palette.background.dialog,
        },
        '&.Mui-focused:after': {
            borderBottomColor: theme.palette.common.border.BottomAfter,
        },
        '&:before': {
            borderBottom: `1px solid ${theme.palette.common.border.BottomBefore}`,
        },
        '&:after': {
            borderBottomColor: theme.palette.common.border.BottomAfter,
        },
        '& .MuiInputLabel-root.Mui-error': {
            borderBottomColor: theme.palette.common.border.BottomError,
            left: 'inherit',
        },
        '& .MuiSelect-icon': {
            position: 'unset',
            color: theme.palette.common.white,
        },
        '& .MuiSelect-select': {
            paddingRight: '0px!important',
        },
    },

    menu: {
        marginLeft: '2%',
        direction: 'rtl',
        marginRight: '2%',
    },

    titleMenu: {
        left: 'inherit',
        color: theme.palette.common.white,
        '&.Mui-focused': {
            color: `${theme.palette.common.spoofy}!important`,
        },
    },

    menuItem: {
        direction: 'rtl',
    },

    error: {
        float: 'right',
        fontSize: '14px',
        fontWeight: 'bold',
        color: theme.palette.common.error,
    },
}));

export default useStyles;
