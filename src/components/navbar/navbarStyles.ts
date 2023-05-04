import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    btnMenu: {
        color: 'white',
        fontSize: '1.75rem',
        lineHeight: '0.75',
        fontWeight: '500',
        padding: '7px 35px',
        backgroundColor: 'gray',
        '&:hover': {
            backgroundColor: `rgb(${255}, ${255}, ${255})`,
            color: `rgb(${74}, ${191}, ${117})`,
            border: '1px solid rgb(74, 191, 117)',
        },
    },
    activeBtn: {
        backgroundColor: `rgb(${74}, ${191}, ${117})`,
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '150px',
        '& :hover': {
            backgroundColor: `rgb(${4}, ${166}, ${85})`,
        },
    },
});

export default useStyles;
