import { store, persistodStore } from 'redux/store';
import { StyledEngineProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { SnackbarProvider } from 'notistack';
import { ApolloProvider } from '@apollo/client';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline } from "@mui/material";

import ReactDOM from 'react-dom/client';
import App from 'components/App';
import client from 'utils/client';
import React from 'react';
import './index.css';
import StylesProviders from 'components/themeProvider/themeProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<SnackbarProvider maxSnack={2}>
				<Provider store={store}>
					<PersistGate persistor={persistodStore}>
						<StylesProviders>
							<ApolloProvider client={client}>
								<App />
							</ApolloProvider>
						</StylesProviders>
					</PersistGate>
				</Provider>
			</SnackbarProvider>
		</LocalizationProvider>
	</React.StrictMode>
);
