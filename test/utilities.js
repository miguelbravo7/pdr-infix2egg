const sinon = require("sinon");
const { runFromFile } = require('../lib/invm.js');

let testFile = async (msg, file, outputs) => {
    test(msg, async () => {
        await runFromFile(file);
        expect(console.log.args).toEqual(outputs);
    });
};

beforeEach(() => {
    sinon.stub(console, "log");
});

afterEach(() => {
    console.log.restore();
});

module.exports = {
    testFile
};