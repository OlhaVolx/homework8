import {faker} from "@faker-js/faker";
// const API_URL = Cypress.env('API_URL');
// const TOKEN = Cypress.env('TOKEN');
const TEAM_ID = Cypress.env('TEAM_ID');

export const createGoal = () =>{
  return  cy.sendRequest(`/team/${TEAM_ID}/goal`,'POST', {
        name: faker.internet.username(),
    })
}