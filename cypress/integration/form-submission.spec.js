describe("Form submission", () => {
  it("Adds new todo", () => {
    const newTodo = {
      "name": "This is a new task",
      "isComplete": false,
      "id": 4
    };

    cy.server();
    cy.route("POST", "/api/todos", newTodo);

    cy.seedAndVisit();

    cy.get(".new-todo")
      .type(newTodo.name)
      .type("{enter}")

    cy.get('.todo-list')
      .contains(newTodo.name)

    cy.get(".new-todo")
      .should("not.have.value")
  })

  it("shows an error when submit failed", () => {
    const typedText = "A new todo with error";

    cy.server();
    cy.route({
      method: "POST",
      url: "/api/todos",
      status: 500,
      response: {}
    }).as("postWithError");

    cy.seedAndVisit();

    cy.get(".new-todo")
      .type(typedText)
      .type("{enter}")

    cy.wait("@postWithError")

    cy.get('.error')
      .should("be.visible")

    cy.get(".todo-list li")
      .should("have.length", 3)
      .and("not.contain", typedText)

    cy.get(".new-todo")
      .should("have.value", typedText)
  })
})
