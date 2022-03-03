import * as Styled from "./TimeEntry.styled";

import DeleteIcon from "../../../public/icons/delete-icon.svg";

interface TimeEntryProps {
  client: string;
  endTime: string;
  id?: number;
  startTime: string;
  handleClick: (id?: number) => void;
}

export const TimeEntry = ({ client, endTime, id, startTime, handleClick }: TimeEntryProps) => {
  const timeFormat: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  const startDate = new Date(startTime);
  const stopDate = new Date(endTime);

  const difference = Math.abs(stopDate.getTime() - startDate.getTime());
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
      <Styled.DeleteButton onClick={() => handleClick(id)}>
        <DeleteIcon />
      </Styled.DeleteButton>
    </Styled.TimeEntry>
  );
};
