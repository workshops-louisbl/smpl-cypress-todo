describe("Smoke tests", () => {
  it("loads the app successfully", () => {
    cy.visit("/")

    cy.contains("todos")
  })

  it("Adds a new item", () => {
    cy.visit("/")

    cy.get(".new-todo")
      .type("One todo")
      .type("{enter}")

    cy.get(".todo-list li")
      .contains("One todo")

    cy.get(".todo-list li")
      .its("length")
      .then((listSize) => {
        cy.get(".new-todo")
          .type("Another todo")
          .type("{enter}")

        cy.get(".todo-list li")
          .should("have.length", listSize + 1);
      })

  })
})
