#!/usr/bin/env node
const { runFromFile } = require('../lib/invm.js');

const fileName = process.argv.slice(2).shift();

runFromFile(fileName);
