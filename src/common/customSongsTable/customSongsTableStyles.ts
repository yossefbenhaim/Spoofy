import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    dataGride: {
        width: '100%',
        height: '100%',
        padding: '1.2%',
        direction: 'rtl',
        borderRadius: '20px',
        color: theme.palette.common.white,
        borderColor: theme.palette.background.main,
        backgroundColor: theme.palette.background.gray,
        '& .MuiDataGrid-columnHeader:focus': {
            outline: 'none!important',
        },
        '& .MuiDataGrid-cell:focus': {
            outline: 'none',
        },
        '& .MuiDataGrid-iconSeparator': {
            color: theme.palette.common.blurred.fullBlurred,
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
            fontSize: '1.5rem',
            transform: 'rotate(90deg)',
            color: theme.palette.common.white,
        },
        '& .MuiDataGrid-groupingCriteriaCell span 3 ': {
            display: 'none',
        },
        '& .MuiDataGrid-row.Mui-selected': {
            backgroundColor: theme.palette.common.blurred.selectedRow,
        },
        '& .MuiDataGrid-row.Mui-selected:hover': {
            backgroundColor: theme.palette.common.blurred.selectedRow,
        },
    },

    addSongBtnContainer: {
        height: '8%',
        marginTop: '1%',
        marginBottom: '1%',
        textAlign: 'center',
    },

    headerDataGridArtistDuration: {
        fontSize: '1.8rem',
        boxSizing: 'inherit',
        color: theme.palette.common.white,
        borderRight: `1px solid ${theme.palette.common.white}`,
    },

    headerDataGridSong: {
        fontSize: '1.8rem',
        boxSizing: 'inherit',
        color: theme.palette.common.white,
    },

    iconEmptyRows: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
}));

export default useStyles;
