import React, { useEffect, useState } from "react";

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
      {timeEntries.map(({ client, endTime, id, startTime }, i) => {
        const currentDate = new Date(startTime).toLocaleDateString();
        const renderHeader =
          i === 0
            ? true
            : new Date(timeEntries[i - 1].startTime).toLocaleDateString() !== currentDate;

        return (
          <React.Fragment key={id}>
            {renderHeader && <TimeEntriesHeader date={startTime} />}

            <TimeEntry client={client} startTime={startTime} endTime={endTime} />
          </React.Fragment>
        );
      })}
    </>
  );
};
