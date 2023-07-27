import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    formControl: {
        alignContent: 'center',
        minWidth: 120,
        width: '180px',
        height: '35px',
        direction: 'ltr',
        display: 'flex',
        flexDirection: 'row-reverse',
        '& .MuiFormLabel-root': {
            transformOrigin: 'top right',
            left: '30px',
            '&.Mui-focused': {
                color: 'white',
                transformOrigin: 'top right',
                left: '30px',
            },
        },
        '& .MuiOutlinedInput-notchedOutline legend': {
            marginLeft: '300px',
        },
    },

    titleMenu: {
        left: '38px',
        color: 'white',
    },

    select: {
        width: '220px',
        backgroundColor: 'gray',
        borderRadius: '10px',
        border: '1px solid',
        color: `rgb(255, 255, 255)`,

        '& .MuiSelect-select': {
            paddingRight: '10px!important',
            direction: 'rtl',
        },

        '& .MuiSelect-icon': {
            left: '7px',
            color: 'white',
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
                borderColor: '#ffffff00',
            },
        },
        '& .MuiSvgIcon-root': {
            fontSize: '2.5rem',
        },
    },

    menuItem: {
        direction: 'rtl',
    },
});

export default useStyles;
