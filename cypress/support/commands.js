// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("seedAndVisit", () => {
    cy.server();

    cy.route("GET", "/api/todos", [
      {
        "id": 1,
        "name": "Item 1",
        "isComplete": false
      },
      {
        "id": 2,
        "name": "Item 2",
        "isComplete": false
      },
      {
        "id": 3,
        "name": "Item 3",
        "isComplete": false
      }
    ])

    cy.visit("/");
})
