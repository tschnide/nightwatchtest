
/**
 * Put a description here of what you want the test to do.
 */
module.exports = {
  before(browser) {
    browser.maximizeWindow();
  },

 'Search Google' : function (browser) { 
 var google = browser.page.google();

    google
      .navigate()
      .setValue('@searchbar', ["testing google", browser.Keys.ENTER])
    browser.pause(1000)
    google
      .verify.elementPresent('@allTab', 'The \'All\' tab is present')
      .verify.elementPresent('@imagesTab', 'The \'Images\' tab is present')
      .verify.elementPresent('@newsTab', 'The \'News\' tab is present')
},

'Check Google for the meaning of life' : function (browser) {
  var google = browser.page.google();

  google
    .navigate()
    .setValue('@searchbar', ["the answer to life the universe and everything", browser.Keys.ENTER])
  browser
    .pause(2000)
  google
    .verify.elementPresent('@calculator', 'The search opened the Google calculator')
    .expect.element('@calculatorInput').text.to.equal('42')
},
  
  after(browser) { browser.end(); }

}