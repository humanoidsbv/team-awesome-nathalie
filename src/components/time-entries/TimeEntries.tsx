import * as Styled from "./TimeEntries.styled";

import { TimeEntry } from "../time-entry/TimeEntry";

export const TimeEntries = () => {
  return (
    <>
      <Styled.TimeEntries>
        Friday 29-07 (Today) <span>08:00</span>
      </Styled.TimeEntries>
      <TimeEntry />
    </>
  );
};
