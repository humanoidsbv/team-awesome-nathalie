import * as Types from "../types/TimeEntry.types";

export const addTimeEntry = async (newTimeEntry: Types.TimeEntry) => {
  const response = await fetch(
    "https://my-json-server.typicode.com/humanoidsbv/team-awesome-nathalie/time-entries",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTimeEntry),
    },
  );

  return response.json();
};
