import * as Types from "../types/TimeEntry.types";

import { NotFoundError } from "../error/not-found-error";

export async function getTimeEntries(): Promise<Types.TimeEntry[]> {
  return fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/time-entries`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (response.status === 404) {
        throw new NotFoundError("Error/ Not Found");
      }

      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
}
