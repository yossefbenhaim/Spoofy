import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    title: {
        color: `rgb(${74}, ${191}, ${117})`,
        fontSize: '5rem',
        textShadow: '2px 2px 2px black',
    },
    btn: {
        backgroundColor: `rgb(${70}, ${138}, ${41})`,
        borderRadius: '10px',
    },
    fieldsContainer: {
        backgroundColor: `rgb(${80}, ${77}, ${77})`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '705px',
        '& .css-1tgv085-MuiButtonBase-root-MuiButton-root-btn:hover': {
            backgroundColor: `rgb(${21}, ${162}, ${49})`,
        },
    },
    menu: {
        margin: '40px',
        alignContent: 'center',
        minWidth: 120,
        width: '220px',
        display: 'flex',
        flexDirection: 'row-reverse',
        '& .css-15rasaf-MuiFormLabel-root-MuiInputLabel-root-titleMenu.Mui-focused':
            {
                left: '4px',
                color: 'white',
            },

        '& .css-zlbu7s-MuiFormLabel-root-MuiInputLabel-root-titleMenu.Mui-focused':
            {
                left: '30px',
                color: 'white',
                transformOrigin: 'top right',
            },

        '& .css-5wednp-MuiFormControl-root-menu': {
            left: '30px',
        },

        '& .css-388xio-MuiFormLabel-root-MuiInputLabel-root-titleMenu': {
            transformOrigin: 'top right',
            left: '30px',
        },
        '& .css-14lo706': {
            marginLeft: '68px',
        },
        '& .css-zlbu7s-MuiFormLabel-root-MuiInputLabel-root-titleMenu': {
            left: '69px',
        },
    },
    titleMenu: {
        left: '38px',
        color: 'white',
    },
    select: {
        width: '220px',
        backgroundColor: `rgb(${112}, ${106}, ${106})`,
        borderRadius: '17px',
        color: `rgb(${255}, ${255}, ${255})`,

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
    },
    lottieStyle: {
        width: '200px',
    },
});

export default useStyles;

// `rgb(${redValue}, ${greenValue}, ${blueValue})`
