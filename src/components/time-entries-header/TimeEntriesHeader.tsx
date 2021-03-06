import React, { useContext } from "react";

import { StoreContext } from "../store-provider/StoreProvider";

import * as Styled from "./TimeEntriesHeader.styled";
import * as Types from "../../types/TimeEntry.types";

interface TimeEntriesHeaderProps {
  dateString: string;
}

export const TimeEntriesHeader = ({ dateString }: TimeEntriesHeaderProps) => {
  const state = useContext(StoreContext);
  const [timeEntries] = state.timeEntries;
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-NL", {
    weekday: "long",
    month: "numeric",
    day: "numeric",
  });

  const formatDuration = (duration: number) => {
    const hours = Math.round(duration / 1000 / 60 / 60).toString();
    const minutes = Math.round((duration / 1000 / 60) % 60).toString();
    return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
  };

  const getDurationByDay = (isoDate: string) => {
    const calculateDuration = ({ endTime, startTime }: Types.TimeEntry) => {
      return new Date(endTime).getTime() - new Date(startTime).getTime();
    };

    const duration = timeEntries
      .filter(
        ({ startTime }) => new Date(startTime).toDateString() === new Date(isoDate).toDateString(),
      )
      .reduce((acc, timeEntry) => acc + calculateDuration(timeEntry), 0);
    return formatDuration(duration);
  };

  return (
    <Styled.TimeEntriesHeader>
      {formattedDate}
      <span>{getDurationByDay(dateString)}</span>
    </Styled.TimeEntriesHeader>
  );
};
