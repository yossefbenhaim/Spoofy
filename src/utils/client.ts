import { ApolloClient, InMemoryCache, split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { Kind } from 'graphql';

const URI_GRAGHQ_HTTP = import.meta.env.VITE_URI_GRAGHQ;
const URI_GRAGHQ_WS = import.meta.env.VITE_URI_WS;

const httpLink = new HttpLink({
    uri: URI_GRAGHQ_HTTP,
});
const wsLink = new GraphQLWsLink(
    createClient({
        url: URI_GRAGHQ_WS,
    })
);

const link = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === Kind.OPERATION_DEFINITION &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink
);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache({
        addTypename: false,
    }),
});

export default client;
