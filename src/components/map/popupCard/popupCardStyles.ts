import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    cardContainer: {
        backgroundColor: 'rgb(22 183 84 / 50%)',
        color: 'white',
        backdropFilter: 'blur(5px)',
        width: '200px',
        direction: 'rtl',
    },
    content: {
        fontSize: '12px',
    },
}));

export default useStyles;
