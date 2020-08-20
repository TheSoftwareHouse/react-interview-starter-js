import { AppRoute } from '../../../src/routing/AppRoute.enum';

class Navigation {
  goToHome() {
    cy.get(`a[href*="${AppRoute.home}"]`)
      .first()
      .click();
  }

  goToLogin() {
    cy.get(`a[href*="${AppRoute.login}"]`)
      .first()
      .click();
  }

  get homeLink() {
    return `${Cypress.env().baseUrl}${AppRoute.home}`;
  }

  get loginLink() {
    return `${Cypress.env().baseUrl}${AppRoute.login}`;
  }
}

export const NavigationMenu = new Navigation();
