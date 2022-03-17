import React from "react";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";

import client from "../apollo-client";

import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
