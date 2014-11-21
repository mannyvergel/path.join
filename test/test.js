var joinPath = require('../index.js');

var assert = require("assert");

var onlyPath = joinPath('path', '//to/', '/my', 'heart');
var expectedValue = 'path/to/my/heart';

describe('app', function () {
	it('should have the correct value', function(done) {
		console.log(onlyPath);
		assert.equal(onlyPath, expectedValue, 'Did not expect the value');
		done();
	})
});