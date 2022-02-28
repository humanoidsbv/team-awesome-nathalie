import React, { useState } from "react";

import { Modal } from "../modal/Modal";
import { NewTimeEntry } from "../new-time-entry/NewTimeEntry";
import { PageContainer } from "../page-container/PageContainer";
import { Subheader } from "../subheader/Subheader";
import { TimeEntriesHeader } from "../time-entries-header/TimeEntriesHeader";
import { TimeEntry } from "../time-entry/TimeEntry";

import * as Types from "./TimeEntries.types";
import { removeTimeEntry } from "../../services/delete-time-entries";

interface TimeEntriesProps {
  timeEntries: Types.TimeEntry[];
}

export const TimeEntries = (props: TimeEntriesProps) => {
  const [timeEntries, setTimeEntries] = useState<Types.TimeEntry[]>(props.timeEntries);
  const [isModalActive, setIsModalActive] = useState(false);

  const handleClick = (id: number) => {
    setTimeEntries(timeEntries.filter((timeEntry) => timeEntry.id !== id));
    removeTimeEntry(id);
  };

  return (
    <>
      <Subheader
        buttonLabel="New time entry"
        onClick={() => setIsModalActive(true)}
        subtitle="12 Entries"
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
        {timeEntries.map(({ client, endTime, id, startTime }, i) => {
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
