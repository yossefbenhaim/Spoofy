import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    btnMenu: {
        color: theme.palette.common.white,
        border: '1px solid gray',
        fontSize: '1.75rem',
        lineHeight: '0.75',
        fontWeight: '500',
        padding: '7px 35px',
        backgroundColor: 'gray',
        justifyContent: 'center',
        '&:hover': {
            backgroundColor: `rgb(255, 255, 255)`,
            border: `1px solid ${theme.palette.common.spoofy}`,
            color: theme.palette.common.spoofy,
        },
    },
    activeBtn: {
        backgroundColor: theme.palette.background.spoofy,
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '27px',
        '& :hover': {
            backgroundColor: `rgb(4, 166, 85)`,
        },
    },
}));

export default useStyles;
