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

        '&.Mui-focused': {
            color: `rgb(${74}, ${191}, ${117})!important`,
        },
    },
    select: {
        // width: '220px',
        // backgroundColor: `rgb(${112}, ${106}, ${106})`,
        // borderRadius: '17px',
        '& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon': {
            right: '10%',
        },

        '& .css-1mf6u8l-MuiSvgIcon-root-MuiSelect-icon': {
            right: '10%',
        },
        '& .css-ujn4t5-MuiInputBase-root-MuiInput-root-MuiSelect-root-select .MuiSelect-icon':
            {
                right: '10%',
            },
        '& .css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input:focus':
            {
                backgroundColor: `rgb(${118}, ${118}, ${118})`,
            },
        '& .css-gbe0rs-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root-select':
            {
                borderRadius: '17px',
            },
        '& .MuiSelect-icon': {
            left: '7px',
            color: 'white',
        },

        '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':
            {
                padding: '16.5px 55px',
            },
        '& .css-s087wz-MuiInputBase-root-MuiInput-root-MuiSelect-root-select::after':
            {
                borderBottom: `rgb(${74}, ${191}, ${117})`,
            },
        '& .css-14v4aj8-MuiInputBase-root-MuiInput-root-MuiSelect-root-select::after':
            {
                borderBottom: `rgb(${74}, ${191}, ${117})`,
            },
        '::after': {
            borderBottom: `rgb(${74}, ${191}, ${117})`,
        },
    },
    input: {
        marginLeft: '2%',
        marginRight: '2%',
        direction: 'rtl',
        left: 'inherit',

        '& .Mui-focused': {
            left: 'inherit',
            color: `rgb(${74}, ${191}, ${117})`,
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
});

export default useStyles;
