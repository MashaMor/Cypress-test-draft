import sel from '../../fixtures/selectors.json';
import exp from '../../fixtures/expected.json';

describe('Test', function () {

    before('Open App', function () {
        cy.visit('/');
    });

    describe('Title', function () {

        it('TC-001 Page Title ', function () {
            cy.title().should('eq', exp.title);
        });

    });

    describe('Elements exist', function () {

        it('TC-002 Login form is present', function () {
            cy.get(sel.loginForm).should('be.visible');
        });

        it('TC-003 Logo is present', function () {
            cy.get(sel.logo).should('be.visible');
        });

        it('TC-004 Header is present', function () {
            cy.get(sel.header).should('be.visible');
        });

        it('TC-005 Username field is present', function () {
            cy.get(sel.username).should('be.visible');
        });

        it('TC-006 Username field placeholder -> "Username" ', function () {
            cy.get(sel.username).invoke('attr', 'placeholder').should('contain', exp.usernamePlaceholder);
        });

        it('TC-007 Password field is present', function () {
            cy.get(sel.password).should('be.visible');
        });

        it('TC-008 Password field placeholder -> "Password" ', function () {
            cy.get(sel.password).invoke('attr', 'placeholder').should('contain', exp.passwordPlaceholder);
        });

        it('TC-009 Login button is present', function () {
            cy.get(sel.loginBtn).should('be.visible');
        });

        it('TC-010 Login button text -> "Login"', function () {
            cy.get(sel.loginBtn).invoke('val').should('contain', exp.loginBtnText);
        });

    });

});
