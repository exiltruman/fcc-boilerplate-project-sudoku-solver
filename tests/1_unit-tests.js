const chai = require('chai');
const assert = chai.assert;

const Solver = require('../controllers/sudoku-solver.js');
let solver = new Solver();
const ps = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..'

suite('Unit Tests', () => {
    test('Logic handles a valid row placement', () => {
        const result = solver.checkRowPlacement(ps, 0, 0, 3);
        assert.isTrue(result);
    })
    test('Logic handles a valid column placement', () => {
        const result = solver.checkColPlacement(ps, 0, 8, 1);
        assert.isTrue(result);
    })
    test('Logic handles a valid region (3x3 grid) placement', () => {
        const result = solver.checkRegionPlacement(ps, 3, 4, 1);
        assert.isTrue(result);
    })
    
});
