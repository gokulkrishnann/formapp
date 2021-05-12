/// <reference types="cypress" />

context('Form Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Create a post', () => {
    cy.get('[name="user"]').should('be.visible');
    cy.get('[name="user"]').select('Ervin Howell');
    cy.get('[name="title"]').type('jsr');
    cy.get('[name="body"]').type('ons');
    cy.get('.action-form').submit();
    cy.get('.message').contains('Form Submitted successfully');
    cy.get('.reset').click();
  });

  it('Validate Field Errors', () => {
    cy.get('.action-form').submit();
    cy.get('[class*="fieldErrorTitle"]').contains('Title is required input');
    cy.get('[class*="fieldErrorUser"]').contains('Please select a user');
    cy.get('[class*="fieldErrorBody"]').contains('Body is required input');
  });

  it('Reset Fields', () => {
    cy.get('[name="user"]').select('Patricia Lebsack');
    cy.get('[name="body"]').type('test');
    cy.get('.action-form').submit();
    cy.get('[class*="fieldErrorTitle"]').contains('Title is required input');
    cy.get('.reset').click();
    cy.get('[name="title"]').should('have.value', '');
  });
});
