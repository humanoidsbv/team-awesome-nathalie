import React from "react";

import type { AppProps } from "next/app";

import { StoreProvider } from "../src/components/store-provider/StoreProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </>
  );
}

export default MyApp;
