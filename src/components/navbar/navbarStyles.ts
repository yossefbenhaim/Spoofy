import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    btnMenu: {
        fontWeight: '500',
        lineHeight: '0.75',
        fontSize: '1.75rem',
        padding: '7px 35px',
        justifyContent: 'center',
        color: theme.palette.common.white,
        backgroundColor: theme.palette.background.gray,
        border: `1px solid ${theme.palette.background.gray}`,
        '&:hover': {
            color: theme.palette.common.spoofy,
            backgroundColor: theme.palette.background.white,
            border: `1px solid ${theme.palette.common.spoofy}`,
        },
    },
    activeBtn: {
        backgroundColor: theme.palette.background.spoofy,
    },
    btnContainer: {
        gap: '27px',
        display: 'flex',
        flexDirection: 'column',
        '& :hover': {
            backgroundColor: theme.palette.common.white,
        },
    },
}));

export default useStyles;
