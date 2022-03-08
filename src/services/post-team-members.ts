import * as Types from "../types/TeamMembers.types";

export const addTeamMember = async (newTeamMember: Types.TeamMember) => {
  const response = await fetch(
    "https://my-json-server.typicode.com/humanoidsbv/team-awesome-nathalie/team-members",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTeamMember),
    },
  );

  return response.json();
};
