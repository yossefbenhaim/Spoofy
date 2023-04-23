import { StyledEngineProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import client from 'utils/client';
import { ApolloProvider } from '@apollo/client';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <ApolloProvider client={client}>
                <Provider store={store}>
                    <App />
                </Provider>
            </ApolloProvider>
        </StyledEngineProvider>
    </React.StrictMode>
);
