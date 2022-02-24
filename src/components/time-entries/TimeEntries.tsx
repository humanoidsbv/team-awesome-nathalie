import React, { useEffect, useState } from "react";

import { Form } from "../form/Form";
import { Modal } from "../modal/Modal";
import { Subheader } from "../subheader/Subheader";
import { TimeEntry } from "../time-entry/TimeEntry";
import { TimeEntriesHeader } from "../time-entries-header/TimeEntriesHeader";
import { PageContainer } from "../page-container/PageContainer";

import * as Types from "./TimeEntries.types";

interface TimeEntriesProps {
  timeEntries: Types.TimeEntry[];
}

export const TimeEntries = (props: TimeEntriesProps) => {
  const [timeEntries, setTimeEntries] = useState<Types.TimeEntry[]>(props.timeEntries);
  const [isModalActive, setIsModalActive] = useState(false);

  function createTimeEntry(newTimeEntry: Types.TimeEntry) {
    setTimeEntries([...timeEntries, newTimeEntry]);
  }

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
        <Form onClose={() => setIsModalActive(false)} onCreate={createTimeEntry} />
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

              <TimeEntry client={client} endTime={endTime} startTime={startTime} />
            </React.Fragment>
          );
        })}
      </PageContainer>
    </>
  );
};
