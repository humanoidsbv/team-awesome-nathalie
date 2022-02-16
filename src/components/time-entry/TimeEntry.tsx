import * as Styled from "./TimeEntry.styled";

import DeleteIcon from "../../../public/icons/delete-icon.svg";

interface TimeEntryProps {
  client: string;
  startTimestamp: string;
  stopTimestamp: string;
}

export const TimeEntry = ({ client, startTimestamp, stopTimestamp }: TimeEntryProps) => {
  const startDate = new Date(startTimestamp);
  const startTime = startDate.toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const stopDate = new Date(stopTimestamp);
  const stopTime = stopDate.toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const difference = Math.abs(stopDate - startDate);
  const totalMinutes = Math.floor(difference / 1000 / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return (
    <Styled.TimeEntry>
      {client}
      <Styled.TimeText>
        {startTime} - {stopTime}
        <Styled.HoursWorked>
          {" "}
          {hours < 10 ? "0" + hours : hours}:{minutes < 10 ? "0" + minutes : minutes}
        </Styled.HoursWorked>
      </Styled.TimeText>
      <Styled.DeleteButton>
        <DeleteIcon />
      </Styled.DeleteButton>
    </Styled.TimeEntry>
  );
};
