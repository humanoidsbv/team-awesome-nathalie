import React, { useState } from "react";

import * as Styled from "./TimeEntries.styled";

import { TimeEntry } from "../time-entry/TimeEntry";

import mockTimeEntries from "../../fixtures/time-entries.json";

export const TimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState(mockTimeEntries);

  function handleClick() {
    setTimeEntries([
      ...mockTimeEntries,
      {
        id: 0.852425099514819,
        client: "Amazon",
        startTimestamp: "2019-09-26T16:48:00.000Z",
        stopTimestamp: "2019-09-26T18:00:00.000Z",
      },
    ]);
  }

  return (
    <>
      <Styled.TimeEntries>
        Friday 29-07 (Today) <span>08:00</span>
      </Styled.TimeEntries>
      <button onClick={handleClick}>Add time entry</button>
      {timeEntries.map((timeEntry) => (
        <TimeEntry
          client={timeEntry.client}
          startTimestamp={timeEntry.startTimestamp}
          stopTimestamp={timeEntry.stopTimestamp}
        />
      ))}
    </>
  );
};
