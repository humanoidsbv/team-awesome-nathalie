import React from "react";

import GlobalStyle from "../styles/global";

import { Header } from "../src/components/header/Header";
import { StoreProvider } from "../src/components/store-provider/StoreProvider";
import { TimeEntries } from "../src/components/time-entries/TimeEntries";

import { getTimeEntries } from "../src/services/get-time-entries";
import { NotFoundError } from "../src/error/not-found-error";

import * as Types from "../src/types/TimeEntry.types";
import { getClients } from "../src/services/get-clients";

interface homepageProps {
  timeEntries: Types.TimeEntry[];
  clients: [];
}

export const getServerSideProps = async () => {
  const response = await getTimeEntries();
  const clientsResponse = await getClients();

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
      clients: clientsResponse,
    },
  };
};

const Homepage = ({ timeEntries, clients }: homepageProps) => {
  return (
    <>
      <GlobalStyle />
      <StoreProvider>
        <Header />
        <TimeEntries timeEntries={timeEntries} clients={clients} />
      </StoreProvider>
    </>
  );
};

export default Homepage;
