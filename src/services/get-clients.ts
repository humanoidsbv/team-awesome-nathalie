import { NotFoundError } from "../error/not-found-error";
import * as Types from "../types/Client.types";

export async function getClients(): Promise<Types.Client> {
  return fetch(`https://my-json-server.typicode.com/humanoidsbv/team-awesome-nathalie/clients`, {
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
