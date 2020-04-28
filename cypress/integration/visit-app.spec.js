describe("Visit app", () => {
  context("With existing todos", () => {
    beforeEach(() => {
      cy.seedAndVisit();
    })

    it("List todos from API", () => {
      cy.get(".todo-list li")
        .should("have.length", 3)
    })
  })

  context("Without existing todos", () => {
    beforeEach(() => {
      cy.seedAndVisit("fixture:empty");
    })

    it("Shows an empty list", () => {
      cy.get(".todo-list li")
        .should("have.length", 0)
    })
  })
})
