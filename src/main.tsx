import { StyledEngineProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { store, persistodStore } from 'redux/store';
import { ApolloProvider } from '@apollo/client';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { PersistGate } from 'redux-persist/integration/react';
import { SnackbarProvider } from 'notistack';

import ReactDOM from 'react-dom/client';
import App from './components/App';
import client from 'utils/client';
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
								<App />
							</PersistGate>
						</Provider>
					</ApolloProvider>
				</SnackbarProvider>
			</StyledEngineProvider>
		</LocalizationProvider>
	</React.StrictMode>
);
