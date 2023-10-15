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
import { theme } from 'styles/theme'
import React from 'react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<StyledEngineProvider injectFirst>
				<SnackbarProvider maxSnack={2}>
					<ApolloProvider client={client}>
						<Provider store={store}>
							<PersistGate persistor={persistodStore}>
								<ThemeProvider theme={theme}>
									<App />
								</ThemeProvider>
							</PersistGate>
						</Provider>
					</ApolloProvider>
				</SnackbarProvider>
			</StyledEngineProvider>
		</LocalizationProvider>
	</React.StrictMode>
);
