import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface TypeBackground {
        gray: string;
        main: string;
        white: string;
        dialog: string;
        spoofy: string;
        scrollbar: string;
        selectUser: string;
        selectedSong: string;
        buttonColors: {
            submit: string;
            addButton: string;
            disconect: string;
            delete: string;
        };
    }
    interface CommonColors {
        spoofy: string;
        error: string;
        gray: string;
        border: {
            BottomError: string;
            BottomBefore: string;
            BottomAfter: string;
        };
        scrollbar: {
            main: string;
            hover: string;
        };
        blurred: {
            fullBlurred: string;
            selectedRow: string;
        };
    }

    interface CustomProperties {
        sampleMission: string;
        streamingMission: string;
        errorBorderSize: number;
        fieldRadius: number;
        bubbleRadius: number;
        timelineMissionRadius: number;
    }

    interface Theme {
        customProperties: CustomProperties;
    }

    interface ThemeOptions {
        customProperties?: Partial<CustomProperties>;
    }
}

export const theme = createTheme({
    palette: {
        background: {
            main: 'rgb(80, 77, 77)',
            white: 'rgb(255, 255, 255)',
            gray: 'gray',
            spoofy: 'rgb(74, 191, 117)',
            dialog: 'rgb(118, 118, 118)',
            selectUser: 'rgb(112, 106, 106)',
            scrollbar: 'rgb(142 146 143)',
            selectedSong: 'rgb(75, 218, 128)',
            buttonColors: {
                submit: 'linear-gradient(to left, #C4E538,#009432,#C4E538)',
                addButton:
                    'linear-gradient(to left, rgb(185, 172, 172),gray,rgb(185, 172, 172))',
                disconect: 'rgb(112, 106, 106)',
                delete: 'rgb(191, 90, 74)',
            },
        },
        common: {
            gray: 'gray',
            error: '#ff0000',
            spoofy: 'rgb(74, 191, 117)',
            border: {
                BottomError: 'red',
                BottomBefore: 'black',
                BottomAfter: '#16b754',
            },
            scrollbar: {
                main: '#29c029',
                hover: '#41dc41',
            },
            blurred: {
                selectedRow: '#9d9d9dc9',
                fullBlurred: '#ffffff00',
            },
        },
    },
});
