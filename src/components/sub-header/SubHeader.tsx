import { Button } from "../button/Button";
import * as Styled from "./SubHeader.styled";

export const SubHeader = () => {
  return (
    <Styled.Container>
      <Styled.TimesheetEntry>
        Timesheets<Styled.Entries>12 Entries</Styled.Entries>
      </Styled.TimesheetEntry>
      <Styled.Button>
        <Button label="New time entry" style="primary" icon={true} />
      </Styled.Button>
    </Styled.Container>
  );
};
