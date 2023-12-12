import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    containerFields: {
        width: '100%',
        height: '70%',
        backgroundColor: '#282828',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        direction: 'rtl',
        padding: '50px',
    },
    titleContainer: {
        height: '18%',
        borderBottom: '1px solid #80808063',
    },
    title: {
        color: 'white',
        fontSize: '30px',
    },
    contentContainer: {
        color: 'white',
        height: '30%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleContent: {
        fontSize: '20px',
    },
    content: {
        fontSize: '15px',
        color: '#808080',
    },
    switchColor: {
        '& .MuiSwitch-thumb': {
            content: '"*"',
            backgroundColor: theme.palette.common.spoofy,
        },
    },
}));

export default useStyles;
