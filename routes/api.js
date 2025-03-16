'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {
  
  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {
      const puzzle = req.body.puzzle;
      const coordinate = req.body.coordinate;
      const value = req.body.value;

      if(!(puzzle && coordinate && value)) return res.json({ error: 'Required field(s) missing' })

      if(!solver.validate(puzzle).chars) return res.json({ error: 'Invalid characters in puzzle' })
      if(!solver.validate(puzzle).length) return res.json({ error: 'Expected puzzle to be 81 characters long' })
    });
    
  app.route('/api/solve')
    .post((req, res) => {
      const puzzle = req.body.puzzle;
      if(!puzzle) return res.json({ error: 'Required field missing' });

      if(!solver.validate(puzzle).chars) return res.json({ error: 'Invalid characters in puzzle' })
      if(!solver.validate(puzzle).length) return res.json({ error: 'Expected puzzle to be 81 characters long' })
    });
};
