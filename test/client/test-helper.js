var chai = require('chai');
chai.use(require('sinon-chai'));
chai.use(require('chai-as-promised'));
var sinon = require('sinon');

beforeEach(function() {
  this.sinon = sinon.sandbox.create();
});

afterEach(function() {
  this.sinon.restore();
});

module.exports = {
  expect: chai.expect,
  sinon: this.sinon
};

