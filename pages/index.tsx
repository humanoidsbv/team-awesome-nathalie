import React from "react";

import GlobalStyle from "../styles/global";

import { Header } from "../src/components/header/Header";
import { StoreProvider } from "../src/components/store-provider/StoreProvider";
import { TimeEntries } from "../src/components/time-entries/TimeEntries";

import { getTimeEntries } from "../src/services/get-time-entries";
import { NotFoundError } from "../src/error/not-found-error";

import * as Types from "../src/types/TimeEntries.types";

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
      <StoreProvider>
        <Header />
        <TimeEntries timeEntries={timeEntries} />
      </StoreProvider>
    </>
  );
};

export default Homepage;
