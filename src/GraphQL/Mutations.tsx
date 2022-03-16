import { gql } from "@apollo/client";

export const ADD_TIME_ENTRY = gql`
  mutation CreateTimeEntry(
    $activity: String!
    $client: String!
    $endTime: String!
    $startTime: String!
  ) {
    createTimeEntry(
      activity: $activity
      client: $client
      endTime: $endTime
      startTime: $startTime
    ) {
      id
      activity
      client
      endTime
      startTime
    }
  }
`;

export const DELETE_TIME_ENTRY = gql`
  mutation RemoveTimeEntry($id: ID!) {
    removeTimeEntry(id: $id) {
      id
    }
  }
`;
