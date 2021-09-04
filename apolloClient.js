require('dotenv').config();
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: process.env.API_CLIENT,
    cache: new InMemoryCache(),
});

export default client;