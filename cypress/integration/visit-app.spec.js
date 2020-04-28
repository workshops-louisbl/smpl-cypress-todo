describe("Visit app", () => {
  beforeEach(() => {
    cy.seedAndVisit();
  })

  it("loads the app successfully", () => {
  })

  it("List todos from API", () => {
    cy.get(".todo-list li")
      .should("have.length", 3)
  })
})
