import * as Styled from "./TimeEntry.styled";

import DeleteIcon from "../../../public/icons/delete-icon.svg";

export const TimeEntry = () => {
  return (
    <Styled.TimeEntry>
      Port of Rotterdam
      <Styled.TimeText>
        09:00 - 17:00 <Styled.DurationTime>08:00</Styled.DurationTime>
      </Styled.TimeText>
      <Styled.DeleteButton>
        <DeleteIcon />
      </Styled.DeleteButton>
    </Styled.TimeEntry>
  );
};
