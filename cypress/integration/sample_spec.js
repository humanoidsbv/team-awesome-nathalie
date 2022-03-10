describe("Routing", () => {
  it("Navigates to other pages and clicks on New Humanoids button", () => {
    cy.visit("http://localhost:3003");
    cy.get(".kFSJaw").contains("Timesheets").should("exist");

    cy.get(".kFSJaw").contains("Team members").click();
    cy.wait(500);

    cy.get(".fReVed").contains("New").click();

    cy.get("#firstName").type("Nathalie");
    cy.get("#lastName").type("Bruinhof");
    cy.get(".fReVed").contains("Add").click();

    cy.get(".ceCBlX svg").click();
  });
});
