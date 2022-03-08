import * as Types from "../types/TimeEntry.types";

export const addTimeEntry = async (newTimeEntry: Types.TimeEntry) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/time-entries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTimeEntry),
  });

  return response.json();
};
