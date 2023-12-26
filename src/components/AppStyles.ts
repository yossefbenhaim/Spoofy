import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    root: {
        backgroundColor: theme.palette.background.main,
        backgroundImage: theme.palette.background.backgroundMainImage,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
    },
}));

export default useStyles;
