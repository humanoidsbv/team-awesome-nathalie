import * as Types from "../types/TeamMembers.types";

import { NotFoundError } from "../error/not-found-error";

export async function getTeamMembers(): Promise<Types.TeamMember[]> {
  return fetch(
    "https://my-json-server.typicode.com/humanoidsbv/team-awesome-nathalie/team-members",
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
  )
    .then((response) => {
      if (response.status === 404) {
        throw new NotFoundError("Error/ Not Found");
      }

      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
}
