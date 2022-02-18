import React, { useState, useEffect } from "react";

import { TimeEntry } from "../time-entry/TimeEntry";
import { TimeEntriesHeader } from "../time-entries-header/TimeEntriesHeader";

export const TimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState([]);

  async function getTimeEntries() {
    const response = await fetch("http://localhost:3004/time-entries", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    return response.json();
  }

  async function fetchTimeEntries() {
    setTimeEntries(await getTimeEntries());
  }

  useEffect(() => {
    fetchTimeEntries();
  }, []);

  return (
    <>
      {timeEntries.map(({ id, startTime, client, endTime }, i, array) => {
        const currentDate = new Date(startTime).toLocaleDateString();
        const renderHeader =
          i === 0 ? true : new Date(array[i - 1].startTime).toLocaleDateString() !== currentDate;

        return (
          <React.Fragment key={id}>
            {renderHeader && <TimeEntriesHeader date={startTime} />}

            <TimeEntry client={client} startTimestamp={startTime} stopTimestamp={endTime} />
          </React.Fragment>
        );
      })}
    </>
  );
};
