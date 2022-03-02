import * as Types from "../types/TeamMembers.types";

export const addTeamMember = async (newTeamMember: Types.TeamMember) => {
  const response = await fetch("http://localhost:3004/team-members", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTeamMember),
  });

  return response.json();
};
