import * as Styled from "../time-entries-header/TimeEntriesHeader.styled";

interface TimeEntriesHeaderProps {
  date: string;
}

export const TimeEntriesHeader = ({ date }: TimeEntriesHeaderProps) => {
  const dates = new Date(date);

  const displayDate = dates.toLocaleDateString("en-NL", {
    weekday: "long",
    month: "numeric",
    day: "numeric",
  });

  return (
    <Styled.TimeEntriesHeader>
      {displayDate}
      <span>08:00</span>
    </Styled.TimeEntriesHeader>
  );
};
