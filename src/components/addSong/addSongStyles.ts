import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    addSongBtn: {
        marginTop: '4px',
        padding: '2px 18px',
        borderRadius: '20px',
        border: `2px solid rgb(${185}, ${172}, ${172})`,
        backgroundColor: `rgb(${185}, ${172}, ${172})`,
        '&:hover': {
            backgroundColor: 'white',
            color: `rgb(${185}, ${172}, ${172})`,
            border: `2px solid rgb(${185}, ${172}, ${172})`,
        },
    },
    dialog: {
        backgroundColor: `rgb(${118}, ${118}, ${118})`,
        width: '800px',
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    dialogContainer: {
        '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
            maxWidth: '800px',
            flexDirection: 'inherit',
        },
    },
    header: {
        marginBottom: '2%',
        textAlign: 'center',
        height: '10%',
        backgroundColor: `rgb(${74}, ${191}, ${117})`,
        color: 'white',
        fontSize: '2.2rem',
        fontWeight: 'bold',
        fontFamily: 'system-ui',
    },
    menu: {
        marginLeft: '2%',
        marginRight: '2%',
        direction: 'rtl',
        '& .css-15rasaf-MuiFormLabel-root-MuiInputLabel-root-titleMenu.Mui-focused':
            {
                color: 'white',
            },
    },
    titleMenu: {
        left: 'inherit',
        color: `rgb(${74}, ${191}, ${117})`,
        '&.Mui-focused': {
            color: `rgb(${74}, ${191}, ${117})!important`,
        },
    },
    select: {
        color: `rgb(${255}, ${255}, ${255})`,

        '& .css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input.css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input.css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input':
            {
                paddingRight: '0px',
            },

        '& .css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input:focus':
            {
                backgroundColor: `rgb(${118}, ${118}, ${118})`,
            },
        '::after': {
            borderBottom: `rgb(${74}, ${191}, ${117})`,
        },

        '& .css-1mf6u8l-MuiSvgIcon-root-MuiSelect-icon': {
            position: 'unset',
            color: `rgb(${255}, ${255}, ${255})`,
        },
        '& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon': {
            position: 'unset',
            color: `rgb(${255}, ${255}, ${255})`,
        },
    },
    input: {
        marginLeft: '2%',
        marginRight: '2%',
        direction: 'rtl',
        left: 'inherit',

        '& .css-1x51dt5-MuiInputBase-input-MuiInput-input': {
            direction: 'ltr',
            textAlign: 'end',
        },
        '& .Mui-focused': {
            left: 'inherit',
            color: `rgb(${255}, ${255}, ${255})`,
        },

        '& .css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root': {
            left: 'inherit',
            color: `rgb(${74}, ${191}, ${117})`,
        },
        '& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
            left: 'inherit',
            color: `rgb(${74}, ${191}, ${117})`,
        },
        '& .css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root.Mui-focused::after':
            {
                left: 'inherit',
                color: `rgb(${74}, ${191}, ${117})`,
            },
        '& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused::after':
            {
                left: 'inherit',
                color: `rgb(${74}, ${191}, ${117})`,
            },
        '& .css-v4u5dn-MuiInputBase-root-MuiInput-root:after': {
            left: 'inherit',
            borderBottom: `rgb(${74}, ${191}, ${117})`,
        },
        '& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root': {
            left: 'inherit',
            borderBottom: `rgb(${74}, ${191}, ${117})`,
        },
        '& .css-1d1r5q-MuiFormHelperText-root': {
            color: ' #d32f2f ',
        },
        '& .css-v4u5dn-MuiInputBase-root-MuiInput-root.Mui-error:before': {
            borderBottomColor: 'black',
        },
        '& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-error': {
            color: `rgb(${74}, ${191}, ${117})`,
        },
    },

    btn: {
        backgroundColor: `rgb(${70}, ${138}, ${41})`,
        borderRadius: '30px',
        minWidth: '15%',
        width: '15%',
        marginLeft: '44%',
        marginBottom: '3%',
        fontSize: '1rem',
        padding: '3px 16px',
        '&:hover': {
            backgroundColor: `rgb(${80}, ${160}, ${60})`,
        },
    },
    error: {
        color: ' #d32f2f ',
        float: 'right',
        fontWeight: 'bold',
    },
});

export default useStyles;
