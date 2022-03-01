import React, { useState } from "react";

import { Modal } from "../modal/Modal";
import { NewTeamMember } from "../new-team-member/NewTeamMember";
import { PageContainer } from "../page-container/PageContainer.styled";
import { Subheader } from "../subheader/Subheader";
import { TeamMember } from "../team-member/TeamMember";

export const TeamMembersComponent = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <>
      <Subheader
        buttonLabel="New Humanoid"
        subtitle="22 Humanoids"
        title="Team members"
        onClick={() => setIsModalActive(true)}
      />
      <Modal isActive={isModalActive} onClose={() => setIsModalActive(false)} title="New Humanoid">
        <NewTeamMember />
      </Modal>
      <PageContainer>
        <TeamMember />
      </PageContainer>
    </>
  );
};
