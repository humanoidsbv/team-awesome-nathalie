import * as Styled from "./TimeEntry.styled";

import DeleteIcon from "../../../public/icons/delete-icon.svg";

export const TimeEntry = () => {
  return (
    <>
      <Styled.TimeEntry>
        Port of Rotterdam
        <Styled.TimeText>
          09:00 - 17:00 <Styled.TimeTextTime>08:00</Styled.TimeTextTime>
        </Styled.TimeText>
        <DeleteIcon />
      </Styled.TimeEntry>
    </>
  );
};
