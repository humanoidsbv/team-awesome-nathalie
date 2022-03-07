import { NotFoundError } from "../error/not-found-error";
import * as Types from "../types/Client.types";

export async function getClients(): Promise<Types.Client> {
  return fetch("http://localhost:3004/clients", {
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
