describe('Assertions', () => {
    it('Verify that the elements are visible in header', () => {
        cy.visit("https://demo.productionready.io/#/register"); // pre-condition (Given)

        // action (When) 

        // TO find conduit at header
        cy.get(".navbar-brand");

       // to select Home
      // cy.get(".nav-item a").eq(0)
      cy.get(".nav-item a").first()

      // to select Sign Up top right
      cy.get(".nav-item a").eq(2)

      // to select Sign Up  Center header
      cy.get(".text-xs-center.ng-binding")

// to select Have an account?
      cy.contains("Have an account?")

      // to select UserName text field 
      cy.get(".form-group").first()
      // to select Email text field 

      cy.get(".form-group").eq(1)
      // to select Password text field 
      cy.get(".form-group").eq(2)

       // to select Sign Up  Button
      cy.get("[type=submit]")

// TO find conduit at footer
cy.get(".logo-font");

// TO find 
cy.get(".attribution");



    });

    

});