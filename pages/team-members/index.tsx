import React from "react";
import { gql } from "@apollo/client";
import client from "../../apollo-client";

import GlobalStyle from "../../styles/global";

import { Header } from "../../src/components/header/Header";
import { TeamMembersComponent } from "../../src/components/team-members-component/TeamMembersComponent";

import * as Types from "../../src/types/TeamMembers.types";

interface teamMemberProps {
  teamMembers: Types.TeamMember[];
}

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
      query GetTeamMembers {
        allTeamMembers {
          emailAddress
          client
          firstName
          id
          label
          lastName
          role
          startingDate
        }
      }
    `,
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
