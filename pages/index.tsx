import React from "react";

import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/global";
import { theme } from "../styles/theme";

import { Header } from "../src/components/header/Header";
import { TimeEntries } from "../src/components/time-entries/TimeEntries";

import { getTimeEntries } from "../src/services/get-time-entries";
import { NotFoundError } from "../src/error/not-found-error";

import * as Types from "../src/components/time-entries/TimeEntries.types";

interface homepageProps {
  timeEntries: Types.TimeEntry[];
}

export const getServerSideProps = async () => {
  const response = await getTimeEntries();

  if (response instanceof NotFoundError) {
    return {
      props: {
        timeEntries: [],
      },
    };
  }

  return {
    props: {
      timeEntries: response,
    },
  };
};

const Homepage = ({ timeEntries }: homepageProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <TimeEntries timeEntries={timeEntries} />
      </ThemeProvider>
    </>
  );
};

export default Homepage;
