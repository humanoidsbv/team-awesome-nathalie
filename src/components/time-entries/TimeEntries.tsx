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
}

export const TimeEntries = (props: TimeEntriesProps) => {
  const state = useContext(StoreContext);
  const [timeEntries, setTimeEntries] = state.timeEntries;
  const [isModalActive, setIsModalActive] = useState(false);

  useEffect(() => {
    setTimeEntries(props.timeEntries);
  }, []);

  const handleClick = (id?: number) => {
    setTimeEntries(timeEntries.filter((timeEntry) => timeEntry.id !== id));
    removeTimeEntry(id);
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
        {timeEntries
          .sort((a, b) => Number(new Date(b.startTime)) - Number(new Date(a.startTime)))
          .map(({ client, endTime, id, startTime }, i) => {
            const currentDate = new Date(startTime).toLocaleDateString();
            const renderHeader =
              i === 0
                ? true
                : new Date(timeEntries[i - 1].startTime).toLocaleDateString() !== currentDate;
            return (
              <React.Fragment key={id}>
                {renderHeader && <TimeEntriesHeader dateString={startTime} />}

                <TimeEntry {...{ client, endTime, id, startTime, handleClick }} />
              </React.Fragment>
            );
          })}
      </PageContainer>
    </>
  );
};
