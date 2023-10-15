import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    dialogContainer: {
        '& .MuiPaper-root ': {
            maxWidth: '800px',
            flexDirection: 'inherit',
        },
    },
    dialog: {
        backgroundColor: theme.palette.background.dialog,
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
        color: 'white',
        fontSize: '2.2rem',
        fontWeight: 'bold',
        fontFamily: 'system-ui',
        backgroundColor: theme.palette.background.spoofy,
    },
    select: {
        color: theme.palette.common.white,
        borderBottomColor: theme.palette.common.borderBottomAfter,
        '& .MuiInput-input:focus': {
            backgroundColor: theme.palette.background.dialog,
        },
        '&.Mui-focused:after': {
            borderBottomColor: theme.palette.common.borderBottomAfter,
        },
        '&:before': {
            borderBottom: `1px solid ${theme.palette.common.borderBottomBefore}`,
        },

        '&:after': {
            borderBottomColor: theme.palette.common.borderBottomAfter,
        },
        '& .MuiInputLabel-root.Mui-error': {
            borderBottomColor: theme.palette.common.borderBottomError,
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
        marginRight: '2%',
        direction: 'rtl',
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
        color: ' #ff0000 ',
        float: 'right',
        fontWeight: 'bold',
        fontSize: '14px',
    },
}));

export default useStyles;
