import * as Styled from "./TimeEntry.styled";

import DeleteIcon from "../../../public/icons/delete-icon.svg";

interface TimeEntryProps {
  client: string;
  startTimestamp: string;
  stopTimestamp: string;
}

export const TimeEntry = ({ client, startTimestamp, stopTimestamp }: TimeEntryProps) => {
  const timeFormat: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  const startDate = new Date(startTimestamp);
  const stopDate = new Date(stopTimestamp);

  const difference = Math.abs(stopDate.valueOf() - startDate.valueOf());
  const totalMinutes = Math.floor(difference / 1000 / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return (
    <Styled.TimeEntry>
      {client}
      <Styled.TimeText>
        {startDate.toLocaleTimeString("nl-NL", timeFormat)} -{" "}
        {stopDate.toLocaleTimeString("nl-NL", timeFormat)}
        <Styled.HoursWorked>
          {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}
        </Styled.HoursWorked>
      </Styled.TimeText>
      <Styled.DeleteButton>
        <DeleteIcon />
      </Styled.DeleteButton>
    </Styled.TimeEntry>
  );
};
