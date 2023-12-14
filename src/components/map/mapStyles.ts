import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    customControl: {
        top: '17.5em',
        left: '0.5em',
        border: 0,
        borderRadius: '15px!important',
        '& .MuiButtonBase-root': {
            backgroundColor: theme.palette.background.map.locationCard,
            border: 0,
            borderRadius: '15px',
        },
        '& .MuiSvgIcon-root': {
            fontSize: '1rem',
        },
    },
}));

export default useStyles;
