/// <reference types="Cypress"/>
describe('Purchasing two products sucessfully', () => {
    it.only('Purchased sucessfully', () => {
        //Logging in
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        //Validating the login was sucessfull
        cy.get('[data-test="title"]').should('contain','Products')
        //wait time 1 second
        cy.wait(1000)
        //Adding first product to cart
        cy.get(':nth-child(1) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Backpack')
        cy.contains('Sauce Labs Backpack').click()
        cy.get('.btn_primary').click()
        cy.wait(1000)
        //Adding second product to cart
        cy.get('#back-to-products').click()
        cy.get(':nth-child(2) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Bike Light')
        cy.contains('Sauce Labs Bike Light').click()
        cy.get('.btn_primary').click()
        cy.wait(1000)
        //Validate the number from cart symbol
        cy.get('.shopping_cart_link').should('have.text', '2')
        //Open the cart page
        cy.get('.shopping_cart_link').click()
        //Validate the two products were added
        cy.get('.cart_list > :nth-child(3)').should('contain', 'Sauce Labs Backpack')
        cy.get('.cart_list > :nth-child(4)').should('contain', 'Sauce Labs Bike Light')
        //Go to Checkout Page
        cy.get('#checkout').click()
        cy.get('#first-name').type("Neemias")
        cy.get('#last-name').type("Junior")
        cy.get('#postal-code').type("5432135")
        //Checkout Overview
        cy.get('#continue').click()
        cy.get('.cart_list > :nth-child(3)').should('contain', 'Sauce Labs Backpack')
        cy.get('.cart_list > :nth-child(4)').should('contain', 'Sauce Labs Bike Light')
        //Finish the purchase and validate success
        cy.get('#finish').click()
        cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!')

    });
});