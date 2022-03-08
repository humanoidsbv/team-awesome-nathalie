import * as Types from "../types/TeamMembers.types";

export const addTeamMember = async (newTeamMember: Types.TeamMember) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/team-members`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTeamMember),
  });

  return response.json();
};
