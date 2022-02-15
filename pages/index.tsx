import React from "react";

import styled, { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/global";
import { theme } from "../styles/theme";

import { Header } from "../src/components/header/Header";
import { TimeEntry } from "../src/components/time-entry/TimeEntry";
import { PageContainer } from "../src/components/page-container/PageContainer";
import { TimeEntries } from "../src/components/time-entries/TimeEntries";

const Homepage = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <PageContainer>
          <TimeEntries />
          <TimeEntry />
        </PageContainer>
      </ThemeProvider>
    </>
  );
};

export default Homepage;
