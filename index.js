const { run, runFromFile } = require('./lib/invm.js');

const { InfixParser } = require('./lib/InfixParser.js');

module.exports = {
    run,
    runFromFile,
    InfixParser
}