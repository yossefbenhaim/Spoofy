import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    dataGride: {
        padding: '1.2%',
        direction: 'rtl',
        color: 'white',
        borderColor: `rgb(80, 77, 77)`,
        width: '100%',
        height: '100%',
        marginRight: '1%',
        backgroundColor: 'gray',
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

        '& *': {
            '*::-webkit-scrollbar': {
                backgroundColor: '#7ead7b78',
                width: '10px',
                height: '10px',
                borderRadius: '10px',
            },
            '*::-webkit-scrollbar-track': {
                background: 'gray',
            },
            '*::-webkit-scrollbar-thumb': {
                borderRadius: '10px',
                backgroundColor: '#29c029',
            },
            '*::-webkit-scrollbar-thumb:hover': {
                borderRadius: '10px',
                backgroundColor: '#41dc41',
            },
            '*::-webkit-scrollbar-corner': {
                backgroundColor: 'gray',
                borderRadius: '10px',
            },
        },
    },

    notCurrentDataGride: {
        padding: '1.2%',
        direction: 'rtl',
        color: 'white',
        borderColor: `rgb(80, 77, 77)`,
        width: '100%',
        height: '100%',
        marginRight: '1%',
        backgroundColor: 'gray',
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
        '& .MuiDataGrid-row': {
            '&.Mui-selected': {
                backgroundColor: 'rgb(139 178 215 / 0%)',
            },
            '&.Mui-selected:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
        },

        '& *': {
            '*::-webkit-scrollbar': {
                backgroundColor: '#7ead7b78',
                width: '10px',
                height: '10px',
                borderRadius: '10px',
            },
            '*::-webkit-scrollbar-track': {
                background: 'gray',
            },
            '*::-webkit-scrollbar-thumb': {
                borderRadius: '10px',
                backgroundColor: '#29c029',
            },
            '*::-webkit-scrollbar-thumb:hover': {
                borderRadius: '10px',
                backgroundColor: '#41dc41',
            },
            '*::-webkit-scrollbar-corner': {
                backgroundColor: 'gray',
                borderRadius: '10px',
            },
        },
    },

    headerContainer: {
        marginBottom: '2%',
        textAlign: 'center',
        borderRadius: '15px',
        height: '10%',
        backgroundColor: `rgb(74, 191, 117)`,
        color: 'white',
        fontFamily: 'system-ui',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    header: {
        color: 'white',
        fontSize: '2.8rem',
        fontWeight: 'bold',
        marginTop: '-5px',
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
});

export default useStyles;
