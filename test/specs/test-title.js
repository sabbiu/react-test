describe('Test to check for title', function() {
  it('should check for title google', function() {
  return browser
  .url('http://google.com')
   .getTitle().should.eventually.be.equal('Google');
  });
 });