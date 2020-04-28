describe("Item completion", () => {
  beforeEach(() => {
    cy.seedAndVisit("fixture:todos-toggle");
  })

  it("Toggles active item to completed", () => {
    cy.completeFirstItem()

    cy.get("@activeItem")
      .should("have.class", "completed")
  })

  it("Toggles completed item to active", () => {
    cy.route({
      method: "PUT",
      url: "/api/todos/*",
      response: {
        "id": 2,
        "name": "Completed todo",
        "isComplete": false
      },
    }).as("active")

    cy.get(".todo-list li.completed")
      .first()
      .as("completedItem")
      .find(".toggle")
      .click()

    cy.wait("@active")

    cy.get("@completedItem")
      .should("not.have.class", "completed")
  })
})
