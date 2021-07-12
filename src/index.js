import React from "react";
import ReactDOM from "react-dom";
import App from "src/pages";
import reportWebVitals from "src/reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import { getApolloClient } from "src/services/apolloClient";

const apolloClient = getApolloClient();

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS={true}>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
