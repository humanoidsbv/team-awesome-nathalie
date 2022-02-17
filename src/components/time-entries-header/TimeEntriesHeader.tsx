import * as Styled from "../time-entries-header/TimeEntriesHeader.styled";

interface TimeEntriesHeaderProps {
  date: string;
}

export const TimeEntriesHeader = ({ date }: TimeEntriesHeaderProps) => {
  const dates = new Date(date);
  const dayOfMonth = dates.getDate();
  const month = dates.getMonth() + 1;
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek = dayNames[dates.getDay()];

  return (
    <Styled.TimeEntriesHeader>
      {dayOfWeek} {dayOfMonth}-{month < 10 ? String(month).padStart(2, "0") : month}{" "}
      <span>08:00</span>
    </Styled.TimeEntriesHeader>
  );
};
