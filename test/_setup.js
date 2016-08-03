require('ignore-styles');

const exposedProperties = ['window', 'navigator', 'document'];

const chai = require('chai');
const enzyme = require('enzyme');
const jsdom = require('jsdom');
global.sinon = require('sinon');
global.jsdom = jsdom.jsdom;
global.React = require('react');
global.ReactDOM = require('react-dom');
global.TestUtils = require('react-addons-test-utils');
global.assert = chai.assert;
global.expect = chai.expect;
global.shallow = enzyme.shallow;
global.mount = enzyme.mount;
global.document = jsdom.jsdom('');
global.window = document.defaultView;
global.$ = require('jquery');
Object.keys(document.defaultView).forEach(
  (property) => {
    if (typeof global[property] == 'undefined') {
      exposedProperties.push(property);
      global[property] = document.defaultView[property];
    }
  }
);
global.navigator = {
  userAgent: 'Node.js',
};
