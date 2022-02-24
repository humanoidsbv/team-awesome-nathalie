import React, { useEffect, useState } from "react";

import { TimeEntry } from "../time-entry/TimeEntry";
import { TimeEntriesHeader } from "../time-entries-header/TimeEntriesHeader";

import * as Types from "./TimeEntries.types";

export const TimeEntries = (props) => {
  const [timeEntries] = useState<Types.TimeEntry[]>(props.timeEntries);

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
