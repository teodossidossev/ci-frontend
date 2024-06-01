import {QueryStubs} from "../stubs/query-stubs";

describe('template spec', () => {
  it('Form should exists and be visible', () => {
    cy.visit('/')
    cy.get('.message_form').should('exist').and('be.visible');
  })

  it('Should get message by ID', () => {
    QueryStubs.stubDefaultGetResponse();
    cy.visit('/')
    // When I type message ID
    cy.get('.message-id-input').type('cypress');
    // And I press get message button
    cy.get('.get-message-button').click();
    cy.wait('@getDefaultGetResponse');
    //Then I expect to see message value
    cy.get('.message-value').should('have.value', 'hello from cypress')
  })
})
