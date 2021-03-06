/* eslint-disable react/destructuring-assignment */
import { ChangeEvent, Fragment, useContext, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";

import { Modal } from "../modal/Modal";
import { NewTimeEntry } from "../new-time-entry/NewTimeEntry";
import { PageContainer } from "../page-container/PageContainer";
import { Subheader } from "../subheader/Subheader";
import { TimeEntriesHeader } from "../time-entries-header/TimeEntriesHeader";
import { TimeEntry } from "../time-entry/TimeEntry";

import * as TimeEntryTypes from "../../types/TimeEntry.types";
import * as ClientTypes from "../../types/Client.types";
import { DELETE_TIME_ENTRY } from "../../graphql/Mutations";
import { StoreContext } from "../store-provider/StoreProvider";

interface TimeEntriesProps {
  timeEntries: TimeEntryTypes.TimeEntry[];
  clients: ClientTypes.Client[];
}

export const TimeEntries = (props: TimeEntriesProps) => {
  const state = useContext(StoreContext);
  const [timeEntries, setTimeEntries] = state.timeEntries;
  const [isModalActive, setIsModalActive] = useState(false);
  const [clientFilter, setClientFilter] = useState("");

  useEffect(() => {
    setTimeEntries(props.timeEntries);
  }, []);

  const [removeTimeEntry] = useMutation(DELETE_TIME_ENTRY);

  const handleClick = (id?: number) => {
    setTimeEntries(timeEntries.filter((timeEntry) => timeEntry.id !== id));
    removeTimeEntry({
      variables: { id },
    });
  };

  const handleClientFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    setClientFilter(event.target.value);
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
        <label htmlFor="filter-client">
          Filter client:
          <select name="clients" id="filter-client" onChange={handleClientFilter}>
            <option value="">Select client</option>
            {props.clients.map((client) => (
              <option value={client.name} key={client.id}>
                {client.name}
              </option>
            ))}
          </select>
        </label>

        {timeEntries
          .sort((a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime())
          .filter((timeEntry) => (clientFilter !== "" ? timeEntry.client === clientFilter : true))
          .map(({ client, endTime, id, startTime }, i) => {
            const currentDate = new Date(startTime).toLocaleDateString();
            const renderHeader =
              i === 0
                ? true
                : new Date(timeEntries[i - 1].startTime).toLocaleDateString() !== currentDate;
            return (
              <Fragment key={id}>
                {renderHeader && <TimeEntriesHeader dateString={startTime} />}

                <TimeEntry
                  client={client}
                  endTime={endTime}
                  id={id}
                  startTime={startTime}
                  handleClick={handleClick}
                />
              </Fragment>
            );
          })}
      </PageContainer>
    </>
  );
};
