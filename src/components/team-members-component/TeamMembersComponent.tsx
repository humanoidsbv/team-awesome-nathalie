/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";

import { Modal } from "../modal/Modal";
import { NewTeamMember } from "../new-team-member/NewTeamMember";
import { PageContainer } from "../page-container/PageContainer.styled";
import { Subheader } from "../subheader/Subheader";
import { TeamMember } from "../team-member/TeamMember";

import * as Types from "../../types/TeamMembers.types";

interface TeamMembersComponentProps {
  teamMembers: Types.TeamMember[];
}

type SortTeamMembersValues = "client" | "firstName" | "lastName" | "role" | "startingDate";

export const TeamMembersComponent = (props: TeamMembersComponentProps) => {
  const [teamMembers, setTeamMembers] = useState<Types.TeamMember[]>(props.teamMembers);
  const [isModalActive, setIsModalActive] = useState(false);
  const [sortTeamMember, setSortTeamMember] = useState<SortTeamMembersValues>("lastName");

  const teamMemberProperty = [
    { value: "client", label: "Client" },
    { value: "firstName", label: "First Name" },
    { value: "lastName", label: "Last Name" },
    { value: "role", label: "Role" },
    { value: "startingDate", label: "Starting Date" },
  ];

  const createTeamMembers = (newTeamMember: Types.TeamMember) => {
    setTeamMembers([...teamMembers, newTeamMember]);
  };

  const handleSortTeamMember = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortTeamMember(event.target.value as SortTeamMembersValues);
  };

  return (
    <>
      <Subheader
        buttonLabel="New Humanoid"
        subtitle={`${teamMembers.length} Humanoids`}
        title="Team members"
        onClick={() => setIsModalActive(true)}
      />
      <Modal isActive={isModalActive} onClose={() => setIsModalActive(false)} title="New Humanoid">
        <NewTeamMember onCreate={createTeamMembers} />
      </Modal>
      <PageContainer>
        <label htmlFor="sort-team-members">
          Sort team members:
          <select name="team-members" id="sort-team-members" onChange={handleSortTeamMember}>
            <option value="">Filter by...</option>
            {teamMemberProperty.map((sort) => (
              <option value={sort.value}>{sort.label}</option>
            ))}
          </select>
        </label>

        {teamMembers
          .sort((a, b) => a[sortTeamMember].localeCompare(b[sortTeamMember]))
          .map(({ client, firstName, lastName, role, startingDate }: Types.TeamMember) => (
            <TeamMember
              client={client}
              firstName={firstName}
              lastName={lastName}
              role={role}
              startingDate={startingDate}
            />
          ))}
      </PageContainer>
    </>
  );
};
