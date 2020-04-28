describe("Delete item", () => {
  beforeEach(() => {
    cy.seedAndVisit();

    cy.route({
      method: "DELETE",
      url: "/api/todos/*",
      response: {}
    }).as("deletion")
  })

  it("Shows a button to delete an item", () => {
    cy.get(".todo-list li")
      .first()
      .find(".destroy")
      .invoke("show")
      .should("be.visible")
  })

  it("Deletes an item on destroy click", () => {
    cy.get(".todo-list li")
      .first()
      .find(".destroy")
      .invoke("show")
      .click()

    cy.wait("@deletion")

    cy.get(".todo-list li")
      .should("have.length", 2)
  })
})
