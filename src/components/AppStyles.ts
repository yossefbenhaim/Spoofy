import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    root: {
        backgroundColor: theme.palette.background.main,
    },
}));

export default useStyles;
