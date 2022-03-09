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
      <img src="/img/amijs.jpg" alt="user-avatar" />
      <p>Edit Avatar</p>
      <Styled.Form>
        <Styled.Small>
          <div>
            <label htmlFor="firstName">
              First name
              <input
                id="firstName"
                name="firstName"
                onChange={handleChange}
                type="text"
                value={newTeamMember.firstName ?? ""}
              />
            </label>
          </div>
          <div>
            <label htmlFor="lastName">
              Last name
              <input
                id="lastName"
                name="lastName"
                onChange={handleChange}
                type="text"
                value={newTeamMember.lastName ?? ""}
              />
            </label>
          </div>
        </Styled.Small>
        <label htmlFor="emailAddress">
          E-mail address
          <input
            id="emailAddress"
            name="emailAddress"
            onChange={handleChange}
            type="text"
            value={newTeamMember.emailAddress ?? ""}
          />
        </label>

        <label htmlFor="label">
          Label
          <input
            id="label"
            name="label"
            onChange={handleChange}
            type="text"
            value={newTeamMember.label ?? ""}
          />
        </label>

        <label htmlFor="client">
          Client
          <input
            id="client"
            name="client"
            onChange={handleChange}
            type="text"
            value={newTeamMember.client ?? ""}
          />
        </label>
        <Styled.Small>
          <div>
            <label htmlFor="role">
              Role
              <input
                id="role"
                name="role"
                onChange={handleChange}
                type="text"
                value={newTeamMember.role ?? ""}
              />
            </label>
          </div>
          <div>
            <label htmlFor="startingDate">
              Starting date
              <input
                id="startingDate"
                name="startingDate"
                onChange={handleChange}
                type="text"
                value={newTeamMember.startingDate}
              />
            </label>
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
