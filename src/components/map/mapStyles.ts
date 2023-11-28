import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    customControl: {
        backgroundColor: 'rgb(128 128 128 / 0%)',
        top: '17.5em',
        left: '0.5em',
        border: 0,
        borderRadius: '15px!important',
        '& .MuiButtonBase-root': {
            backgroundColor: 'rgb(74 191 117 / 45%)',
            border: 0,
            borderRadius: '15px',
        },
        '& .MuiSvgIcon-root': {
            fontSize: '1rem',
        },
    },
}));

export default useStyles;
