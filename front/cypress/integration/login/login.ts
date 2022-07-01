import {
  Given,
  When,
  But,
  And,
  Then,
} from 'cypress-cucumber-preprocessor/steps';

Given('I visit the login page', () => {
  cy.visit('/');
});

When('I type valid user {string}', (username) => {
  cy.findByLabelText('Email').as('userInput');
  cy.get('@userInput').type(username);
});

But('I type invalid password {string}', (password) => {
  cy.findByLabelText('Contraseña').as('userPassword');
  cy.get('@userPassword').type(password);
});

And('I press login button', () => {
  cy.findByRole('button', { name: 'Iniciar sesión' }).click();
});

Then('I should see an alert with a message', () => {
  cy.on('window:alert', (str) => {
    expect(str).to.eq('Usuario/Contraseña incorrecto');
  });
  cy.findByRole('button', { name: 'Iniciar sesión' }).click();
});

But('I type valid password {string}', (password) => {
  cy.findByLabelText('Contraseña').as('userPassword');
  cy.get('@userPassword').type(password);
});

Then('I should navigate to house list', () => {
  cy.url().should('eq', Cypress.config().baseUrl + '/list');
});
