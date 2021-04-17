import sel from "../fixtures/selectors";

function inputValues (username, password){
    cy.get(sel.username).type(username);
    cy.get(sel.password).type(password);
}

module.exports = inputValues;