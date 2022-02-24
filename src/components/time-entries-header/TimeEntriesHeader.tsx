import * as Styled from "../time-entries-header/TimeEntriesHeader.styled";

interface TimeEntriesHeaderProps {
  dateString: string;
}

export const TimeEntriesHeader = ({ dateString }: TimeEntriesHeaderProps) => {
  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString("en-NL", {
    weekday: "long",
    month: "numeric",
    day: "numeric",
  });

  return (
    <Styled.TimeEntriesHeader>
      {formattedDate}
      <span>08:00</span>
    </Styled.TimeEntriesHeader>
  );
};
