import * as Styled from "./TeamMember.styled";

export const TeamMember = () => {
  return (
    <Styled.TeamMemberContainer>
      <Styled.TeamMember>
        <img src="/img/amijs.jpg" />
        <Styled.Text>
          Amijs Breunesse
          <p>Front-end Developer</p>
        </Styled.Text>
      </Styled.TeamMember>
      <Styled.WorkInfo>
        <Styled.Text>
          Koppert <p>Employer</p>
        </Styled.Text>
        <Styled.Text>
          February 2018 <p>Starting date</p>
        </Styled.Text>
      </Styled.WorkInfo>
    </Styled.TeamMemberContainer>
  );
};
