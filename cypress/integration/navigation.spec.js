describe("Routing", () => {
  it("Navigates to other pages and clicks on New Humanoids button", () => {
    cy.visit("http://localhost:3004");
    cy.get("#timesheetsLink").contains("Timesheets").should("exist");

    cy.get("#teamMembersLink").contains("Team members").click();
    cy.url().should("include", "/team-members");
    cy.get("#newHumanoidButton").contains("New Humanoid").click();

    cy.get("#firstName").type("Nathalie");
    cy.get("#lastName").type("Bruinhof");
    cy.get("#addHumanoid").contains("Add Humanoid").click();

    cy.get("#closeButton").click();
  });
});
