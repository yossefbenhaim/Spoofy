import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    cardContainer: {
        color: theme.palette.common.text,
        backgroundColor: theme.palette.background.map.locationCard,
        backdropFilter: 'blur(5px)',
        width: '200px',
        direction: 'rtl',
    },
    content: {
        fontSize: '12px',
    },
}));

export default useStyles;
