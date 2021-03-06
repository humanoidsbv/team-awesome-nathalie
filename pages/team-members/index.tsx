import client from "../../apollo-client";

import GlobalStyle from "../../styles/global";

import { Header } from "../../src/components/header/Header";
import { TeamMembersComponent } from "../../src/components/team-members-component/TeamMembersComponent";

import * as Types from "../../src/types/TeamMembers.types";
import { GET_TEAM_MEMBERS } from "../../src/graphql/Queries";

interface teamMemberProps {
  teamMembers: Types.TeamMember[];
}

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: GET_TEAM_MEMBERS,
  });

  return {
    props: {
      teamMembers: data.allTeamMembers,
    },
  };
};

const TeamMembers = ({ teamMembers }: teamMemberProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <TeamMembersComponent teamMembers={teamMembers} />
    </>
  );
};

export default TeamMembers;
