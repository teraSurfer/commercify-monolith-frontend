import {ApolloClient, InMemoryCache, } from "@apollo/client";

let apolloClient;

const createApolloClient = () => {
    return new ApolloClient({
        uri: "http://localhost:8080/graphql",
        cache: new InMemoryCache(),
    });
}

const getApolloClient = () => {
    if(!apolloClient) {
        apolloClient = createApolloClient();
    }
    return apolloClient;
}

export {getApolloClient};
