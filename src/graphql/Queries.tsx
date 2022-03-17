import { gql } from "@apollo/client";

export const GET_TIME_ENTRIES = gql`
  query GetTimeEntries {
    allTimeEntries {
      id
      activity
      client
      endTime
      startTime
    }
    allClients {
      id
      name
    }
  }
`;

export const GET_TEAM_MEMBERS = gql`
  query GetTeamMembers {
    allTeamMembers {
      client
      firstName
      id
      lastName
      role
      startingDate
    }
  }
`;
