/**
 * Login page object, uses the credentials to log in the the app.
 */

const elements = {
    searchbar: {selector: '#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input'},
    allTab: {selector: '#hdtb-msb-vis > div.hdtb-mitem.hdtb-msel.hdtb-imb'},
    imagesTab: {selector: '#hdtb-msb-vis > div:nth-child(2) > a'},
    newsTab: {selector: '#hdtb-msb-vis > div:nth-child(3) > a'},

    calculator: {selector: '#cwmcwd > h2'},
    calculatorInput: {selector: '#cwos'}
  }
  const commands = {
    
  }
  
  module.exports = {
    elements: elements,
    commands: [commands],
    url: function () { return this.api.launchUrl; }
    }