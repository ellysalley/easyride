import { HttpLink, InMemoryCache } from "apollo-boost";
import ApolloClient from "apollo-client";
import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import App from "./Components/App";

const client = new ApolloClient({
  cache: new InMemoryCache,
  link: new HttpLink({
    uri: 'http://localhost:3000/graphql',
  }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
