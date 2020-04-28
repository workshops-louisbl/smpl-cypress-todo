describe("Form input", () => {
  it("Focuses on app load", () => {
    cy.visit("/");

    cy.focused()
    .should("have.class", "new-todo")
  })

  it("Accepts input", () => {
    const typedText = "New task from test";

    cy.visit("/");

    cy.get(".new-todo")
      .type(typedText)
      .should("have.value", typedText)

  })
})
