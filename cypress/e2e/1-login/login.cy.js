/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Login Test', () => {
  it('should login with valid credentials', () => {
    // Kunjungi halaman login
    cy.visit('https://develop--portal-jabar-cms.netlify.app/login'); 
    // Masukkan email
    cy.get('#email').type('rekrutment1@gmail.com'); 

    // Masukkan password
    cy.get('#password').type('jabarjuara'); 

    // Klik tombol login
    cy.get('button[type="submit"]').click(); 

    // Verifikasi apakah login berhasil
   // cy.url().should('include', '/dashboard');
  });


    
});


