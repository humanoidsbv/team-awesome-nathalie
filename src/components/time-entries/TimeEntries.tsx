import React, { useEffect, useState } from "react";

import { Form } from "../form/Form";
import { Modal } from "../modal/Modal";
import { Subheader } from "../subheader/Subheader";
import { TimeEntry } from "../time-entry/TimeEntry";
import { TimeEntriesHeader } from "../time-entries-header/TimeEntriesHeader";

import { getTimeEntries } from "../../api/time-entries-api";

import * as Types from "./TimeEntries.types";

import { PageContainer } from "../page-container/PageContainer";

export const TimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState<Types.TimeEntry[]>([]);
  const [isModalActive, setIsModalActive] = useState(false);

  async function fetchTimeEntries() {
    setTimeEntries(await getTimeEntries());
  }

  useEffect(() => {
    fetchTimeEntries();
  }, []);

  return (
    <>
      <Subheader
        buttonLabel="New time entry"
        onClick={() => setIsModalActive(true)}
        subTitle="12 Entries"
        title="Timesheets"
      />
      <Modal
        isActive={isModalActive}
        onClose={() => setIsModalActive(false)}
        title="New time entry"
      >
        <Form onClose={() => setIsModalActive(false)} />
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
              {renderHeader && <TimeEntriesHeader date={startTime} />}

              <TimeEntry client={client} endTime={endTime} startTime={startTime} />
            </React.Fragment>
          );
        })}
      </PageContainer>
    </>
  );
};
