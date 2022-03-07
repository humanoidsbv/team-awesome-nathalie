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

export const TeamMembersComponent = (props: TeamMembersComponentProps) => {
  const [teamMembers, setTeamMembers] = useState<Types.TeamMember[]>(props.teamMembers);
  const [isModalActive, setIsModalActive] = useState(false);

  const createTeamMembers = (newTeamMember: Types.TeamMember) => {
    setTeamMembers([...teamMembers, newTeamMember]);
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
        {teamMembers.map(
          ({ client, firstName, lastName, role, startingDate }: Types.TeamMember) => (
            <TeamMember
              client={client}
              firstName={firstName}
              lastName={lastName}
              role={role}
              startingDate={startingDate}
            />
          ),
        )}
      </PageContainer>
    </>
  );
};
