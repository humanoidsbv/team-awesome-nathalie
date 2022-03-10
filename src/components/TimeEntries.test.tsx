import { getTimeEntries } from "../services/get-time-entries";
import { NotFoundError } from "../error/not-found-error";

test("if a notFoundError instance is returned after getting a 404", async () => {
  const mockFetchResponse = Promise.resolve({
    status: 404,
  });
  global.fetch = jest.fn().mockImplementationOnce(() => mockFetchResponse);

  const response = await getTimeEntries();

  expect(response).toBeInstanceOf(NotFoundError);
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    `https://my-json-server.typicode.com/humanoidsbv/team-awesome-nathalie/time-entries`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
  );
});
