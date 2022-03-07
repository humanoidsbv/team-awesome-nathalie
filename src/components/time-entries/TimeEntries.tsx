import React, { useContext, useEffect, useState } from "react";

import { Modal } from "../modal/Modal";
import { NewTimeEntry } from "../new-time-entry/NewTimeEntry";
import { PageContainer } from "../page-container/PageContainer";
import { Subheader } from "../subheader/Subheader";
import { TimeEntriesHeader } from "../time-entries-header/TimeEntriesHeader";
import { TimeEntry } from "../time-entry/TimeEntry";

import * as Types from "../../types/TimeEntry.types";
import { removeTimeEntry } from "../../services/delete-time-entries";
import { StoreContext } from "../store-provider/StoreProvider";

interface TimeEntriesProps {
  timeEntries: Types.TimeEntry[];
  clients: [];
}

export const TimeEntries = (props: TimeEntriesProps) => {
  const state = useContext(StoreContext);
  const [timeEntries, setTimeEntries] = state.timeEntries;
  const [isModalActive, setIsModalActive] = useState(false);
  // const [clients, setClients] = useState(props.clients);

  useEffect(() => {
    setTimeEntries(props.timeEntries);
  }, []);

  const handleClick = (id?: number) => {
    setTimeEntries(timeEntries.filter((timeEntry) => timeEntry.id !== id));
    removeTimeEntry(id);
  };

  const handleClientFilter = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <Subheader
        buttonLabel="New time entry"
        onClick={() => setIsModalActive(true)}
        subtitle={`${timeEntries.length} Entries`}
        title="Timesheets"
      />

      <Modal
        isActive={isModalActive}
        onClose={() => setIsModalActive(false)}
        title="New time entry"
      >
        <NewTimeEntry onClose={() => setIsModalActive(false)} />
      </Modal>
      <PageContainer>
        <label htmlFor="filter-client">Filter client:</label>
        <select name="clients" id="filter-client" onChange={handleClientFilter}>
          <option value="">Select client</option>
          {props.clients.map((client) => (
            <option value={client.name}>{client.name}</option>
          ))}
        </select>
        {/* {clients.filter((client) => client.name === timeEntries.client)} */}
        {timeEntries
          .sort((a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime())
          .map(({ client, endTime, id, startTime }, i) => {
            const currentDate = new Date(startTime).toLocaleDateString();
            const renderHeader =
              i === 0
                ? true
                : new Date(timeEntries[i - 1].startTime).toLocaleDateString() !== currentDate;
            return (
              <React.Fragment key={id}>
                {renderHeader && <TimeEntriesHeader dateString={startTime} />}

                <TimeEntry
                  client={client}
                  endTime={endTime}
                  id={id}
                  startTime={startTime}
                  handleClick={handleClick}
                />
              </React.Fragment>
            );
          })}
      </PageContainer>
    </>
  );
};
