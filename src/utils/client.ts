import { ApolloClient, InMemoryCache } from '@apollo/client';

const URI_GRAGHQ_DB = import.meta.env.VITE_URI_GRAGHQ;

const client = new ApolloClient({
    uri: URI_GRAGHQ_DB,
    cache: new InMemoryCache({
        addTypename: false,
    }),
});

export default client;
