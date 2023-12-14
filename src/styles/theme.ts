import { createTheme } from '@mui/material/styles';
import backgroundLoginImage from '../public/loginBackground.svg';

declare module '@mui/material/styles' {
    interface TypeBackground {
        gray: string;
        main: string;
        text: string;
        dialog: string;
        spoofy: string;
        scrollbar: string;
        selectUser: string;
        selectedSong: string;
        loginImage: string;
        dataGrid: string;
        login: string;
        buttonColors: {
            submit: string;
            genericButton: string;
            disconect: string;
            delete: string;
        };
        map: {
            locationCard: string;
        };
        nemuProfile: {
            icon: string;
            boundaryLine: string;
            menu: string;
            setting: string;
            tooltip: string;
            hoverMenu: string;
        };
        profile: {
            dialog: string;
        };
        deleteUser: {
            card: string;
            borderButtom: string;
        };
    }
    interface CommonColors {
        spoofy: string;
        error: string;
        gray: string;
        title: string;
        text: string;
        border: {
            BottomError: string;
            BottomBefore: string;
            BottomAfter: string;
        };
        buttonColor: {
            text: string;
        };
        musicPlayer: {
            icon: string;
            slider: string;
            text: string;
        };
        scrollbar: {
            main: string;
            hover: string;
        };
        blurred: {
            fullBlurred: string;
            selectedRow: string;
        };
        nemuProfile: {
            setting: string;
            borderTop: string;
            text: string;
        };
        profile: {
            text: string;
        };
        login: {
            text: string;
            borderRaduse: string;
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

export const DrakMode = createTheme({
    palette: {
        mode: 'dark',
        background: {
            main: 'rgb(80, 77, 77)',
            text: 'rgb(255, 255, 255)',
            gray: 'gray',
            spoofy: 'rgb(74, 191, 117)',
            dialog: 'rgb(118, 118, 118)',
            selectUser: 'rgb(112, 106, 106)',
            scrollbar: 'rgb(142 146 143)',
            selectedSong: 'rgb(75, 218, 128)',
            dataGrid: 'gray',
            login: '#797777',
            loginImage: `url(${backgroundLoginImage})`,
            buttonColors: {
                submit: 'linear-gradient(to left, #C4E538,#009432,#C4E538)',
                genericButton:
                    'linear-gradient(to left, rgb(185, 172, 172),gray,rgb(185, 172, 172))',
                disconect: 'rgb(112, 106, 106)',
                delete: 'linear-gradient(to left, rgb(185, 172, 172),gray,rgb(185, 172, 172))',
            },
            map: {
                locationCard: 'rgb(22 183 84 / 50%)',
            },
            nemuProfile: {
                boundaryLine: '1px solid #838383',
                icon: 'black',
                tooltip: '#282828',
                menu: '#282828',
                setting: 'rgb(40 40 40)',
                hoverMenu: '#80808063',
            },
            profile: {
                dialog: 'rgb(0 0 0 / 30%)',
            },
            deleteUser: {
                card: 'rgb(0 0 0 / 30%)',
                borderButtom: '1px solid #282828',
            },
        },
        common: {
            gray: 'gray',
            error: '#ff0000',
            spoofy: 'rgb(74, 191, 117)',
            text: 'rgb(255, 255, 255)',
            title: 'white',
            border: {
                BottomError: 'red',
                BottomBefore: 'black',
                BottomAfter: '#16b754',
            },
            scrollbar: {
                main: '#29c029',
                hover: '#41dc41',
            },
            musicPlayer: {
                icon: 'white',
                slider: 'white',
                text: 'white',
            },
            buttonColor: {
                text: 'white',
            },
            blurred: {
                selectedRow: '#9d9d9dc9',
                fullBlurred: '#ffffff00',
            },
            nemuProfile: {
                setting: '#838383',
                borderTop: '1px solid #80808000',
                text: 'white',
            },
            profile: {
                text: 'white',
            },
            login: {
                borderRaduse: 'rgb(74, 191, 117)',
                text: 'black',
            },
        },
    },
});

export const LightMode = createTheme({
    palette: {
        mode: 'light',
        background: {
            main: 'rgb(189 185 185)',
            text: 'black',
            gray: 'rgb(255, 255, 255)',
            spoofy: 'rgb(74, 191, 117)',
            dialog: 'rgb(118, 118, 118)',
            selectUser: 'rgb(255, 255, 255)',
            scrollbar: 'rgb(142 146 143)',
            selectedSong: 'rgb(75, 218, 128)',
            dataGrid: '#87878754',
            login: '#797777',
            loginImage: `url(${backgroundLoginImage})`,
            buttonColors: {
                submit: 'linear-gradient(to left, #C4E538,#009432,#C4E538)',
                genericButton:
                    'linear-gradient(to left, rgb(185, 172, 172),gray,rgb(185, 172, 172))',
                disconect: 'rgb(112, 106, 106)',
                delete: 'linear-gradient(to left, rgb(255 0 0),#f900008c,rgb(255 0 0))',
            },
            map: {
                locationCard: 'rgb(22 183 84 / 50%)',
            },
            nemuProfile: {
                boundaryLine: '1px solid white',
                icon: 'rgb(255, 255, 255)',
                tooltip: '#797777',
                menu: '#797777',
                setting: '#797777',
                hoverMenu: '#4f4f4fd9',
            },
            profile: {
                dialog: 'rgb(0 0 0 / 30%)',
            },
            deleteUser: {
                card: 'rgb(0 0 0 / 30%)',
                borderButtom: '1px solid #797777',
            },
        },
        common: {
            gray: 'rgb(255, 255, 255)',
            error: '#ff0000',
            spoofy: 'rgb(74, 191, 117)',
            text: 'white',
            title: 'white',
            border: {
                BottomError: 'red',
                BottomBefore: 'black',
                BottomAfter: '#16b754',
            },
            scrollbar: {
                main: '#29c029',
                hover: '#41dc41',
            },
            buttonColor: {
                text: 'black',
            },
            musicPlayer: {
                icon: 'black',
                slider: 'black',
                text: 'black',
            },
            blurred: {
                selectedRow: '#9d9d9dc9',
                fullBlurred: '#ffffff00',
            },
            nemuProfile: {
                setting: 'white',
                borderTop: '1px solid white',
                text: 'white',
            },
            profile: {
                text: 'black',
            },
            login: {
                borderRaduse: '',
                text: '',
            },
        },
    },
});
