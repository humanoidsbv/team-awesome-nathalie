import * as Types from "../types/TeamMembers.types";

export async function getTeamMembers(): Promise<Types.TeamMembers[]> {
  const response = await fetch("http://localhost:3004/team-members/", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  return response.json();
}
