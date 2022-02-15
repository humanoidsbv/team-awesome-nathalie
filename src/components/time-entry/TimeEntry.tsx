import * as Styled from "./TimeEntry.styled";

import DeleteIcon from "../../../public/icons/delete-icon.svg";

export const TimeEntry = () => {
  return (
    <Styled.TimeEntry>
      Port of Rotterdam
      <Styled.TimeText>
        09:00 - 17:00 <Styled.TimeAdded>08:00</Styled.TimeAdded>
      </Styled.TimeText>
      <DeleteIcon />
    </Styled.TimeEntry>
  );
};
