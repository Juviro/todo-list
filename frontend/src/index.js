import "babel-polyfill";
import React from "react";
import moment from "moment";
import "moment/locale/de";
import ReactDOM from "react-dom";

import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { withClientState } from "apollo-link-state";
import { InMemoryCache } from "apollo-cache-inmemory";

import "./index.css";
import App from "./components/App/App.jsx";
import * as serviceWorker from "./serviceWorker";
import { defaults, resolvers } from "./resolvers/";
import { SERVER_URL } from "./constants/api";

const httpLink = new HttpLink({
  uri: SERVER_URL,
});

const cache = new InMemoryCache();
const stateLink = withClientState({ resolvers, cache, defaults });

const client = new ApolloClient({
  link: ApolloLink.from([stateLink, httpLink]),
  cache,
});

moment.locale("de");

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
