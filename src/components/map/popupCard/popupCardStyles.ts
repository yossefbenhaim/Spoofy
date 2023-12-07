import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    cardContainer: {
        color: 'white',
        backgroundColor: 'rgb(22 183 84 / 50%)',
        backdropFilter: 'blur(5px)',
        width: '200px',
        direction: 'rtl',
    },
    content: {
        fontSize: '12px',
    },
}));

export default useStyles;
