import React, { useEffect, useState } from "react";

import { TimeEntry } from "../time-entry/TimeEntry";
import { TimeEntriesHeader } from "../time-entries-header/TimeEntriesHeader";

import { NotFoundError } from "../../error/not-found-error";

import * as Types from "./TimeEntries.types";

export const TimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState<Types.TimeEntry[]>([]);

  async function getTimeEntries(): Promise<Types.TimeEntry[]> {
    return fetch("http://localhost:3004/time-entries", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.status === 404) {
          throw new NotFoundError(response);
        }

        return response;
      })
      .then((response) => response.json())
      .catch((error) => error);
  }

  async function fetchTimeEntries() {
    setTimeEntries(await getTimeEntries());
  }

  useEffect(() => {
    fetchTimeEntries();
  }, []);

  return (
    <>
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
    </>
  );
};
