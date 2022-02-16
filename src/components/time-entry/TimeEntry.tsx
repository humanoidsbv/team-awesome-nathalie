import * as Styled from "./TimeEntry.styled";

import DeleteIcon from "../../../public/icons/delete-icon.svg";

interface TimeEntryProps {
  client: string;
  startTimestamp: string;
  stopTimestamp: string;
}

export const TimeEntry = ({ client, startTimestamp, stopTimestamp }: TimeEntryProps) => {
  const startDate = new Date(startTimestamp);
  const hoursStart = startDate.getHours();
  const minutesStart = startDate.getMinutes();
  const convertStart = hoursStart + minutesStart / 60;
  const startTime = startDate.toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });

  console.log();

  const stopDate = new Date(stopTimestamp);
  const hoursStop = stopDate.getHours();
  const minutesStop = stopDate.getMinutes();
  const convertStop = hoursStop + minutesStop / 60;
  const stopTime = stopDate.toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <Styled.TimeEntry>
      {client}
      <Styled.TimeText>
        {startTime} - {stopTime}
        <Styled.HoursWorked>{convertStop - convertStart} hours</Styled.HoursWorked>
      </Styled.TimeText>
      <Styled.DeleteButton>
        <DeleteIcon />
      </Styled.DeleteButton>
    </Styled.TimeEntry>
  );
};
