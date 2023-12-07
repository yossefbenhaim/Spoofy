import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    dialogContainer: {
        backgroundColor: 'rgb(22 183 84 / 0%)',
        '& .MuiBackdrop-root': {
            backgroundColor: '#faebd700',
        },
        '& .MuiPaper-root': {
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgb(0 0 0 / 30%)',
            alignItems: 'center',
            width: '100%',
            height: '60%',
            direction: 'rtl',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            color: 'white',
        },
        '& .MuiDialog-container': {
            transition: 'none!important',
        },
    },
    titelNameContainer: {
        height: '25%',
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: '1px solid rgb(255 255 255/50%)',
    },
    titleName: {
        fontSize: '40px',
    },
    contentProfileContainer: {
        height: '70%',
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        gap: '40px',
    },
    fieldsContainer: {
        height: '15%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '10px',
    },
    title: {
        fontSize: '25px',
    },
    contentText: {},
});

export default useStyles;
