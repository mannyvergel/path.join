var path = require('path');
module.exports = function(args1, args2/*, ... argsN*/) {
	var fullPath = path.join.apply(null, arguments);
	if (process.platform === 'win32') {
		fullPath = fullPath.replace(/\\/g, '/');
	}
	return fullPath;
}