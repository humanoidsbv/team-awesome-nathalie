import * as Types from "../types/TimeEntry.types";

import { NotFoundError } from "../error/not-found-error";

export async function getTimeEntries(): Promise<Types.TimeEntry[]> {
  return fetch(
    "https://my-json-server.typicode.com/humanoidsbv/team-awesome-nathalie/time-entries",
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
