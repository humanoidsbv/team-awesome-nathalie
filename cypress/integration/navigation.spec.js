describe("Routing", () => {
  it("Navigates to other pages and clicks on New Humanoids button", () => {
    cy.visit("https://team-awesome-nathalie-2j41832ya-humanoidsbv.vercel.app/");
    cy.get("[data-cy=timesheetsLink]").contains("Timesheets").should("exist");

    cy.get("[data-cy=teamMembersLink]").contains("Team members").click();
    cy.url().should("include", "/team-members");

    cy.get("[data-cy=subheader]").contains("New Humanoid").click();

    cy.get("[data-cy=firstName]").type("Nathalie");
    cy.get("[data-cy=lastName]").type("Bruinhof");
    cy.get("[data-cy=form]").contains("Add Humanoid").click();

    cy.get("[data-cy=closeButton]").click();
  });
});
