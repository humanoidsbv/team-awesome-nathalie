import * as Styled from "./TeamMember.styled";
import * as Types from "../../types/TeamMembers.types";

export const TeamMember = ({
  client,
  firstName,
  lastName,
  role,
  startingDate,
}: Types.TeamMember) => {
  return (
    <Styled.TeamMemberContainer>
      <Styled.TeamMember>
        <img src="/img/amijs.jpg" alt="user" />
        <Styled.Text>
          {firstName} {lastName}
          <p>{role}</p>
        </Styled.Text>
      </Styled.TeamMember>
      <Styled.WorkInfo>
        <Styled.Text>
          {client} <p>client</p>
        </Styled.Text>
        <Styled.Text>
          {startingDate} <p>Starting date</p>
        </Styled.Text>
      </Styled.WorkInfo>
    </Styled.TeamMemberContainer>
  );
};
