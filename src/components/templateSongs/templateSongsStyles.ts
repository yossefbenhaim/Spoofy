import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    fieldContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    dataGride: {
        direction: 'rtl',
        color: `rgb(${225}, ${225}, ${225})`,
        borderColor: `rgb(${80}, ${77}, ${77})`,
        width: '100%',
        height: '400px',
        backgroundColor: 'gray',
        outline: 'solid #d0130d 0px',

        borderRadius: '20px',
        '& .css-axafay-MuiDataGrid-virtualScroller': {
            borderRadius: '28px',
        },
        '& .MuiDataGrid-columnHeader:focus': {
            outline: 'none!important',
        },
        '& .MuiDataGrid-cell:focus': {
            outline: 'none',
        },
        '& .MuiDataGrid-iconSeparator': {
            color: 'gray',
        },
        '& .css-jdy3vi-MuiDataGrid-root-dataGride': {
            fontSize: '1.5rem',
        },
    },

    header: {
        marginBottom: '2%',
        textAlign: 'center',
        borderRadius: '15px',
        height: '10%',
        backgroundColor: `rgb(${74}, ${191}, ${117})`,
        color: 'white',
        fontSize: '2.2rem',
        fontWeight: 'bold',
        fontFamily: 'system-ui',
    },
    addSongBtnContainer: {
        height: '8%',
        marginBottom: '1%',
        marginTop: '1%',
        textAlign: 'center',
    },
    addSongBtn: {
        marginTop: '4px',
        padding: '2px 18px',
        borderRadius: '20px',
        border: `2px solid rgb(${185}, ${172}, ${172})`,
        backgroundColor: `rgb(${185}, ${172}, ${172})`,
        '&:hover': {
            backgroundColor: 'white',
            color: `rgb(${185}, ${172}, ${172})`,
            border: `2px solid rgb(${185}, ${172}, ${172})`,
        },
    },
    headerDataGrid: {
        boxSizing: 'inherit',
    },
});

export default useStyles;

// .css-1vvbe8i-MuiDataGrid-root-dataGride .MuiDataGrid-columnHeader:focus-within, .css-1vvbe8i-MuiDataGrid-root-dataGride .MuiDataGrid-cell:focus-within
// .css-1vvbe8i-MuiDataGrid-root-dataGride .MuiDataGrid-columnHeader:focus, .css-1vvbe8i-MuiDataGrid-root-dataGride .MuiDataGrid-cell:focus
