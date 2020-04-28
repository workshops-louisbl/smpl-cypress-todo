describe("Form input", () => {
  it("Focuses on app load", () => {
    cy.seedAndVisit();

    cy.focused()
    .should("have.class", "new-todo")
  })

  it("Accepts input", () => {
    const typedText = "New task from test";

    cy.seedAndVisit();

    cy.get(".new-todo")
      .type(typedText)
      .should("have.value", typedText)

  })
})
