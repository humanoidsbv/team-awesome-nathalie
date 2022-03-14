import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { NewTeamMember } from "./NewTeamMember";

describe("New Team Member", () => {
  const mockedTeamMembers = [
    {
      emailAddress: "amijs.breunesse@humanoids.nl",
      client: "Koppert",
      firstName: "Amijs",
      id: 0,
      label: "Een stukje tekst",
      lastName: "Breunesse",
      role: "Front-end Developer",
      startingDate: "February 2018",
    },
  ];
  const mockFetchResponse = Promise.resolve({
    json: () => Promise.resolve(mockedTeamMembers),
  });

  global.fetch = jest.fn().mockImplementationOnce(() => mockFetchResponse);

  it("Send form when clicking on add time entry button", () => {
    const onCreate = jest.fn();
    render(<NewTeamMember onCreate={onCreate} />);

    const submit = screen.getByText("Add time entry");
    fireEvent.click(submit);
    waitFor(() => expect(onCreate).toBeCalled());
  });
});
