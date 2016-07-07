var path = require('path')
var child_process = require('child_process')

module.exports = function (args, callback) {
	args.maxBuffer = 1024 * 1000;
  child_process.exec(module.exports.binaryPath + ' ' + args, callback)
}

module.exports.binaryPath = path.join(__dirname, 'sketchtool', 'bin', 'sketchtool')
