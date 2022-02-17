import * as Styled from "../time-entries-header/TimeEntriesHeader.styled";

interface TimeEntriesHeaderProps {
  date: string;
}

export const TimeEntriesHeader = ({ date }: TimeEntriesHeaderProps) => {
  const dates = new Date(date);
  const dayOfMonth = dates.getDate();
  const month = dates.getMonth() + 1;
  const dayOfWeek = dates.toLocaleDateString("en-us", { weekday: "long" });

  return (
    <Styled.TimeEntriesHeader>
      {dayOfWeek} {dayOfMonth}-{String(month).padStart(2, "0")}
      <span>08:00</span>
    </Styled.TimeEntriesHeader>
  );
};
