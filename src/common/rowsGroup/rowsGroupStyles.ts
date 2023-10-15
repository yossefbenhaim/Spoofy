import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    formControl: {
        minWidth: 120,
        width: '180px',
        height: '35px',
        display: 'flex',
        direction: 'ltr',
        alignContent: 'center',
        flexDirection: 'row-reverse',
        '& .MuiFormLabel-root': {
            left: '30px',
            transformOrigin: 'top right',
            '&.Mui-focused': {
                left: '30px',
                transformOrigin: 'top right',
                color: theme.palette.common.white,
            },
        },
        '& .MuiOutlinedInput-notchedOutline legend': {
            marginLeft: '300px',
        },
    },

    titleMenu: {
        left: '38px',
        color: theme.palette.common.white,
    },

    select: {
        width: '220px',
        border: '1px solid',
        borderRadius: '10px',
        backgroundColor: theme.palette.background.gray,
        color: theme.palette.common.white,

        '& .MuiSelect-select': {
            direction: 'rtl',
            paddingRight: '10px!important',
        },

        '& .MuiSelect-icon': {
            left: '7px',
            color: theme.palette.common.white,
        },

        '& .MuiInputBase-root': {
            borderRadius: '10px',
        },

        '& .MuiOutlinedInput-input': {
            padding: '10px 75px',
        },

        '& .MuiOutlinedInput-notchedOutline': {
            border: '0px solid',
        },

        '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.common.blurred.fullBlurred,
            },
        },

        '& .MuiSvgIcon-root': {
            fontSize: '2.5rem',
        },
    },

    menuItem: {
        direction: 'rtl',
    },
}));

export default useStyles;
