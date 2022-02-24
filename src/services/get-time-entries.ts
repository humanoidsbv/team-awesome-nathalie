import * as Types from "../components/time-entries/TimeEntries.types";
import { NotFoundError } from "../error/not-found-error";

export async function getTimeEntries(): Promise<Types.TimeEntry[]> {
  return fetch("http://localhost:3004/time-entries", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (response.status === 404) {
        throw new NotFoundError(response);
      }

      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
}
