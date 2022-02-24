import React from "react";

import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/global";
import { theme } from "../styles/theme";

import { Header } from "../src/components/header/Header";
import { TimeEntries } from "../src/components/time-entries/TimeEntries";

const Homepage = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <TimeEntries />
      </ThemeProvider>
    </>
  );
};

export default Homepage;
