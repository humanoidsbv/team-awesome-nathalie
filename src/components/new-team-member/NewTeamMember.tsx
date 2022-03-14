import React, { useState } from "react";

import * as Styled from "./NewTeamMember.styled";
import * as Types from "../../types/TeamMembers.types";

import { Button } from "../button/Button";
import { addTeamMember } from "../../services/post-team-members";

interface NewTeamMemberProps {
  onCreate: (newTeamMember: Types.TeamMember) => void;
}

export const NewTeamMember = ({ onCreate }: NewTeamMemberProps) => {
  const [newTeamMember, setNewTeamMember] = useState<Types.TeamMember>({} as Types.TeamMember);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();

    const addedTeamMember = await addTeamMember(newTeamMember);

    if (addedTeamMember) {
      onCreate(newTeamMember);
    }
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setNewTeamMember({ ...newTeamMember, [target.name]: target.value });
  };

  return (
    <Styled.NewTeamMember>
      <img src="/img/amijs.jpg" />
      <p>Edit Avatar</p>
      <Styled.Form>
        <Styled.Small>
          <div>
            <label htmlFor="firstName">First name</label>
            <input
              name="firstName"
              onChange={handleChange}
              type="text"
              value={newTeamMember?.firstName}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last name</label>
            <input
              name="lastName"
              onChange={handleChange}
              type="text"
              value={newTeamMember?.lastName}
            />
          </div>
        </Styled.Small>
        <label htmlFor="emailAddress">E-mail address</label>
        <input
          name="emailAddress"
          onChange={handleChange}
          type="text"
          value={newTeamMember?.emailAddress}
        />

        <label htmlFor="label">Label</label>
        <input name="label" onChange={handleChange} type="text" value={newTeamMember.label ?? ""} />

        <label htmlFor="client">Client</label>
        <input name="client" onChange={handleChange} type="text" value={newTeamMember?.client} />
        <Styled.Small>
          <div>
            <label htmlFor="role">Role</label>
            <input name="role" onChange={handleChange} type="text" value={newTeamMember?.role} />
          </div>
          <div>
            <label htmlFor="startingDate">Starting date</label>
            <input
              name="startingDate"
              onChange={handleChange}
              type="text"
              value={newTeamMember?.startingDate}
            />
          </div>
        </Styled.Small>
        <Styled.Buttons>
          <Button label="Cancel" kind="secondary" />
          <Button label="Add time entry" onClick={handleSubmit} />
        </Styled.Buttons>
      </Styled.Form>
    </Styled.NewTeamMember>
  );
};
