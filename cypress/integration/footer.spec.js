describe("Footer", () => {
  beforeEach(() => {
    cy.seedAndVisit();
  })

  it("Shows active todos number", () => {
    cy.get(".footer")
      .get(".todo-count")
      .contains("3 todos left")
  })

  it("Updates active todos number on completion", () => {
    cy.completeFirstItem()

    cy.get(".footer")
      .get(".todo-count")
      .contains("2 todos left")
  })

  it("Filters active todos", () => {
    cy.get(".footer")
      .contains('Active')
      .click()

    cy.get('.todo-list li')
      .should("have.length", 3)

    cy.url()
      .should("contain", "/active")
  })

  it("Filters completed todos", () => {
    cy.get(".footer")
      .contains('Completed')
      .click()

    cy.get('.todo-list li')
      .should("have.length", 0)

    cy.url()
      .should("contain", "/completed")
  })
})
