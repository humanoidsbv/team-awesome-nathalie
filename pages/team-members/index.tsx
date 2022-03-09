import React from "react";
import GlobalStyle from "../../styles/global";

import { Header } from "../../src/components/header/Header";
import { TeamMembersComponent } from "../../src/components/team-members-component/TeamMembersComponent";
import { getTeamMembers } from "../../src/services/get-team-members";
import { NotFoundError } from "../../src/error/not-found-error";

import * as Types from "../../src/types/TeamMembers.types";

interface teamMemberProps {
  teamMembers: Types.TeamMember[];
}

export const getServerSideProps = async () => {
  const teamMembersResponse = await getTeamMembers();

  if (teamMembersResponse instanceof NotFoundError) {
    return {
      props: {
        teamMembers: [],
      },
    };
  }

  return {
    props: {
      teamMembers: teamMembersResponse,
    },
  };
};

const TeamMembers = ({ teamMembers }: teamMemberProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <TeamMembersComponent databaseTeamMembers={teamMembers} />
    </>
  );
};

export default TeamMembers;
