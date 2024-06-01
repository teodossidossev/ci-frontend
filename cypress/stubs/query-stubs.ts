import {Method} from "cypress/types/net-stubbing";

export class QueryStubs {
  static stubDefaultGetResponse(withDelay: number = 0) {
    QueryStubs.stubQueryResponse('GET', '/get-response.json', 'getDefaultGetResponse', withDelay);
  }

  static stubQueryResponse(method: Method, fixture: string, alias: string, withDelay: number = 0) {
    cy.intercept(method,`/message/*`, {
      fixture,
      delay: withDelay
    }).as(alias);
  }
}
