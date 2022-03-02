import React, { useState } from "react";

import { Modal } from "../modal/Modal";
import { NewTeamMember } from "../new-team-member/NewTeamMember";
import { PageContainer } from "../page-container/PageContainer.styled";
import { Subheader } from "../subheader/Subheader";
import { TeamMember } from "../team-member/TeamMember";

import * as Types from "../../types/TeamMembers.types";

interface TeamMembersComponentProps {
  teamMembers: Types.TeamMembers;
}

export const TeamMembersComponent = (props: TeamMembersComponentProps) => {
  const [teamMembers, setTeamMembers] = useState(props.teamMembers);
  const [isModalActive, setIsModalActive] = useState(false);

  const createTeamMembers = (newTeamMember) => {
    setTeamMembers([...teamMembers, newTeamMember]);
  };

  return (
    <>
      <Subheader
        buttonLabel="New Humanoid"
        subtitle="22 Humanoids"
        title="Team members"
        onClick={() => setIsModalActive(true)}
      />
      <Modal isActive={isModalActive} onClose={() => setIsModalActive(false)} title="New Humanoid">
        <NewTeamMember onCreate={createTeamMembers} />
      </Modal>
      <PageContainer>
        {teamMembers.map(
          ({ employer, firstName, lastName, role, startingDate }: Types.TeamMembers) => (
            <TeamMember
              employer={employer}
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
