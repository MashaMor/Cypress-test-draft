import sel from '../../fixtures/selectors.json';
import exp from '../../fixtures/expected.json';
import data from '../../fixtures/testData.json';

describe('Check login page', function () {

    before('Open App', function () {
        cy.visit('/');
    });

    afterEach(() => {
        cy.get(sel.username).clear();
        cy.get(sel.password).clear();
    });

    it('TC-011 User can\'t login only with username', () => {
        cy.get(sel.username).type(data.testUsername);
        cy.get(sel.loginBtn).click();
        cy.get(sel.errorMessage).should('be.visible');
    });

    it('TC-012 User can\'t login only with username -> " Please enter your password."', () => {
        cy.get(sel.username).type(data.testUsername);
        cy.get(sel.loginBtn).click();
        cy.get(sel.errorMessage).should('have.text', exp.errorMessagePassword);
    });

    it('TC-013 User can\'t login only with password', () => {
        cy.get(sel.password).type(data.testPassword);
        cy.get(sel.loginBtn).click();
        cy.get(sel.errorMessage).should('be.visible');
    });

    it('TC-014 User can\'t login only with password -> "Please enter username."', () => {
        cy.get(sel.password).type(data.testPassword);
        cy.get(sel.loginBtn).click();
        cy.get(sel.errorMessage).should('have.text', exp.errorMessageUsername);
    });

    it('TC-015 User can\'t login with invalid values', () => {
        cy.get(sel.username).type(data.testUsername);
        cy.get(sel.password).type(data.testPassword);
        cy.get(sel.loginBtn).click();
        cy.get(sel.errorMessage).should('be.visible');
    });

    it('TC-016 User can\'t login with invalid values -> "No account found with that username."', () => {
        cy.get(sel.username).type(data.testUsername);
        cy.get(sel.password).type(data.testPassword);
        cy.get(sel.loginBtn).click();
        cy.get(sel.errorMessage).should('have.text', exp.errorMessageInvalidValue);
    });

});