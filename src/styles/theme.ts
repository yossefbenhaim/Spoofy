import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface TypeBackground {
        main: string;
        dataGrid: string;
        spoofy: string;
        dialog: string;
        buttonColors: {
            submit: string;
            addButton: string;
        };
    }
    interface CommonColors {
        spoofy: string;
        borderBottomBefore: string;
        borderBottomAfter: string;
        borderBottomError: string;
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
            dataGrid: 'gray',
            spoofy: 'rgb(74, 191, 117)',
            dialog: 'rgb(118, 118, 118)',
            buttonColors: {
                submit: 'linear-gradient(to left, #C4E538,#009432,#C4E538)',
                addButton:
                    'linear-gradient(to left, rgb(185, 172, 172),gray,rgb(185, 172, 172))',
            },
        },
        common: {
            spoofy: 'rgb(74, 191, 117)',
            borderBottomAfter: '#16b754',
            borderBottomBefore: 'black',
            borderBottomError: 'red',
        },
    },
});
