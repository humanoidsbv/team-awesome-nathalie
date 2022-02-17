import React, { useState } from "react";

import { TimeEntry } from "../time-entry/TimeEntry";
import { TimeEntriesHeader } from "../time-entries-header/TimeEntriesHeader";

import mockTimeEntries from "../../fixtures/time-entries.json";

export const TimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState(mockTimeEntries);

  function handleClick() {
    setTimeEntries([
      ...mockTimeEntries,
      {
        id: 0.85242509951487,
        client: "Amazon",
        startTimestamp: "2019-09-25T16:48:00.000Z",
        stopTimestamp: "2019-09-25T18:00:00.000Z",
      },
    ]);
  }

  return (
    <>
      <button onClick={handleClick}>Add time entry</button>
      {timeEntries.map(({ id, startTimestamp, client, stopTimestamp }, i, array) => {
        const currentDate = new Date(startTimestamp).toLocaleDateString();
        const renderHeader =
          i === 0
            ? true
            : new Date(array[i - 1].startTimestamp).toLocaleDateString() !== currentDate;

        return (
          <React.Fragment key={id}>
            {renderHeader && <TimeEntriesHeader date={startTimestamp} />}

            <TimeEntry
              client={client}
              startTimestamp={startTimestamp}
              stopTimestamp={stopTimestamp}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};
