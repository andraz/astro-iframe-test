/// <reference types="cypress" />

describe('MyComponent', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should render MyComponent correctly', () => {
    cy.get('p').should('exist')
  })

  it('should render MyComponent with the correct text', () => {
    cy.get('p').should('have.text', 'default xx')
  })

  // Add more test cases and assertions as needed
})

const testData = [
  { text: 'test1', expected: 'Test 1 text' },
  { text: 'test2', expected: 'Test 2 text' },
  // Add more test data as needed
]

describe('MyComponent2', () => {
  testData.forEach(data => {
    it(`should render MyComponent with text ${data.expected} when text query is ${data.text}`, () => {
      cy.visit(`/?text=${data.text}`)
      cy.get('p').should('have.text', data.expected)
    })
  })
})
