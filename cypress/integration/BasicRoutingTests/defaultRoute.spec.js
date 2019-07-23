context('Routing', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('default route should divert to /home', () => {
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/home')
    })
  });
})
