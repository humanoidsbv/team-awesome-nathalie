import { Button } from "../button/Button";
import * as Styled from "./SubHeader.styled";

export const SubHeader = () => {
  return (
    <Styled.Container>
      <Styled.TimesheetText>
        Timesheets<Styled.EntryText>12 Entries</Styled.EntryText>
      </Styled.TimesheetText>
      <Styled.Button>
        <Button label="New time entry" style="primary" icon />
      </Styled.Button>
    </Styled.Container>
  );
};
