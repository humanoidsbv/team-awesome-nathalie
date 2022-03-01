import * as Styled from "./TeamMember.styled";
import * as Types from "../../types/TeamMembers.types";

export const TeamMember = ({
  employer,
  firstName,
  lastName,
  role,
  startingDate,
}: Types.TeamMembers) => {
  return (
    <Styled.TeamMemberContainer>
      <Styled.TeamMember>
        <img src="/img/amijs.jpg" />
        <Styled.Text>
          {firstName} {lastName}
          <p>{role}</p>
        </Styled.Text>
      </Styled.TeamMember>
      <Styled.WorkInfo>
        <Styled.Text>
          {employer} <p>Employer</p>
        </Styled.Text>
        <Styled.Text>
          {startingDate} <p>Starting date</p>
        </Styled.Text>
      </Styled.WorkInfo>
    </Styled.TeamMemberContainer>
  );
};
