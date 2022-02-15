import React from "react";

import styled, { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/global";
import { theme } from "../styles/theme";

import { Header } from "../src/components/header/Header";
import { TimeEntry } from "../src/components/time-entry/TimeEntry";

const Homepage = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <TimeEntry />
      </ThemeProvider>
    </>
  );
};

export default Homepage;
