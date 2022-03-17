import React from "react";
import client from "../apollo-client";

import GlobalStyle from "../styles/global";

import { Header } from "../src/components/header/Header";
import { StoreProvider } from "../src/components/store-provider/StoreProvider";
import { TimeEntries } from "../src/components/time-entries/TimeEntries";

import * as Types from "../src/types/TimeEntry.types";

interface HomepageProps {
  clients: [];
  timeEntries: Types.TimeEntry[];
}

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: GET_TIME_ENTRIES,
  });

  return {
    props: {
      clients: data.allClients,
      timeEntries: data.allTimeEntries,
    },
  };
};

const Homepage = ({ timeEntries, clients }: HomepageProps) => {
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
