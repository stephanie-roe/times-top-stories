describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=M6ABMiMVTvWgQutZetmU3W17rZz3HBge", {fixture: "home.json"})
    cy.intercept("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=M6ABMiMVTvWgQutZetmU3W17rZz3HBge", {fixture: "art.json"})
    cy.visit("http://localhost:3000")
  })

  it('should show the user a header, a home button, a list of articles and a list of sections', () => {
    cy.get(".header").contains("Times Top Stories")
    cy.get(".home-button").contains("home")
    cy.get(".article-list").children().should("have.length", 2)
    cy.get(".article-summary").eq(0).contains("After Clash, Manchin and Schumer Rushed to Reset Climate and Tax Deal")
    cy.get(".filter-list").children().should("have.length", 26)
    cy.get(".filter-button").eq(0).contains("arts")
  })

  it('should allow the user to filter top stories by section', () => {
    cy.get(".filter-button").eq(0).click()
    cy.get(".article-list").children().should("have.length", 1)
    cy.get(".article-summary").eq(0).contains("The Role of Art in a Time of War")
  })

  it("should allow the user to return to the home page", () => {
    cy.get(".filter-button").eq(0).click()
    cy.get(".article-list").children().should("have.length", 1)
    cy.get(".article-summary").eq(0).contains("The Role of Art in a Time of War")
    cy.get(".home-button").click()
    cy.get(".article-list").children().should("have.length", 2)
    cy.get(".article-summary").eq(0).contains("After Clash, Manchin and Schumer Rushed to Reset Climate and Tax Deal")
  })

  it("should allow the user to click on an article's summary to see more details", () => {
    cy.get(".article-summary").eq(0).click()
    cy.get(".expanded-title").contains("After Clash, Manchin and Schumer Rushed to Reset Climate and Tax Deal")
    cy.get(".byline").contains("By Emily Cochrane")
  })
})