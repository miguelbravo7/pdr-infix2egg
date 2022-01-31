const { testFile } = require('../test/utilities.js');

testFile('prueba al parser infix',
    'test/examples/dot2.in',
    [['4-5'], [3], [10]]
);

testFile('prueba a la precedencia de operadores',
    'test/examples/minus.in',
    [[3]]
);
