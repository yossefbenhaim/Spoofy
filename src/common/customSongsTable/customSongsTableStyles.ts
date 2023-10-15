import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    dataGride: {
        padding: '1.2%',
        direction: 'rtl',
        color: theme.palette.common.white,
        borderColor: theme.palette.background.main,
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.background.dataGrid,
        outline: 'solid #d0130d 0px',
        borderRadius: '20px',

        '& .MuiDataGrid-columnHeader:focus': {
            outline: 'none!important',
        },
        '& .MuiDataGrid-cell:focus': {
            outline: 'none',
        },
        '& .MuiDataGrid-iconSeparator': {
            color: '#80808000',
        },
        '& .MuiDataGrid-root-dataGride': {
            fontSize: '1.5rem',
        },
        '& .MuiDataGrid-main > div:nth-of-type(3)': {
            display: 'none',
        },
        '& .MuiDataGrid-columnHeaders': {
            fontSize: '20px',
        },
        '& .MuiDataGrid-cell:focus-within': {
            outline: 'none!important',
        },
        '& .MuiDataGrid-groupingCriteriaCell ': {
            direction: 'ltr',
        },
        '& .MuiButtonBase-root svg': {
            color: 'white',
            fontSize: '1.5rem',
            transform: 'rotate(90deg)',
        },
        '& .MuiDataGrid-groupingCriteriaCell span 3 ': {
            display: 'none',
        },
    },

    addSongBtnContainer: {
        height: '8%',
        marginBottom: '1%',
        marginTop: '1%',
        textAlign: 'center',
    },

    headerDataGridArtistDuration: {
        boxSizing: 'inherit',
        color: 'white',
        fontSize: '1.8rem',
        borderRight: '1px solid white',
    },
    headerDataGridSong: {
        boxSizing: 'inherit',
        color: 'white',
        fontSize: '1.8rem',
    },
    iconEmptyRows: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
}));

export default useStyles;
