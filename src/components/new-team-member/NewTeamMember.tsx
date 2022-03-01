import * as Styled from "./NewTeamMember.styled";

import { Button } from "../button/Button";

export const NewTeamMember = () => {
  return (
    <Styled.NewTeamMember>
      <img src="/img/amijs.jpg" />
      <p>Edit Avatar</p>
      <Styled.Form>
        <Styled.Small>
          <div>
            <label htmlFor="">First name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Last name</label>
            <input type="text" />
          </div>
        </Styled.Small>
        <label htmlFor="">E-mail address</label>
        <input type="text" />

        <label htmlFor="">Label</label>
        <input type="text" />

        <label htmlFor="">Employer</label>
        <input type="text" />
        <Styled.Small>
          <div>
            <label htmlFor="">Role</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Starting date</label>
            <input type="text" />
          </div>
        </Styled.Small>
        <Styled.Buttons>
          <Button label="Cancel" kind="secondary" />
          <Button label="Add time entry" />
        </Styled.Buttons>
      </Styled.Form>
    </Styled.NewTeamMember>
  );
};
