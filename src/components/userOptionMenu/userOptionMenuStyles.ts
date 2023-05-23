import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    title: {
        color: 'white',
        textAlign: 'end',
        marginRight: '5%',
    },
    body: {
        textAlign: 'center',
    },
    fieldsContainer: {
        marginLeft: '1.5%',
        marginTop: '0.5%',
        border: '2px solid white',
        borderRadius: '8px',
        height: '57px',
        width: '235px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    btnDisconect: {
        padding: '3px 10px',
        margin: '5px',
        borderRadius: '20px',
        minWidth: '106px',
        lineHeight: '1',
        border: `2px solid rgb(130, 130, 124)`,
        backgroundColor: `rgb(130, 130, 124)`,
        '&:hover': {
            backgroundColor: 'white',
            color: `rgb(130, 130, 124)`,
            border: `2px solid rgb(130, 130, 124)`,
        },
    },
    btnDelete: {
        padding: '3px 10px',
        margin: '5px',
        borderRadius: '20px',
        minWidth: '106px',
        lineHeight: '1',
        border: `2px solid rgb(191, 90, 74)`,
        backgroundColor: `rgb(191, 90, 74)`,
        '&:hover': {
            color: `rgb(191, 90, 74)`,
            backgroundColor: 'white',
        },
    },
    ExitAccountTitle: {
        backgroundColor: `rgb(74, 191, 117)`,
    },
    ExitAccountContent: { backgroundColor: `rgb(130, 130, 124)` },
    ExitAccountHeader: {
        backgroundColor: `rgb(130, 130, 124)`,
        textAlign: 'end',
        paddingRight: '22px',
    },
    ExitBtn: {
        color: `rgb(74, 191, 117)`,
    },
});

export default useStyles;
