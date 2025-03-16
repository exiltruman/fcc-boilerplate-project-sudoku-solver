class SudokuSolver {

  validate(puzzleString) {
    const puzzleStringCorrectLength = (puzzleString.length === 81)
    const usedOnlyValidCharacters = (/^(\d|\.)+$/.test(puzzleString));
    return {
      length: puzzleStringCorrectLength,
      chars: usedOnlyValidCharacters
    }
  }

  checkRowPlacement(puzzleString, row, column, value) {

  }

  checkColPlacement(puzzleString, row, column, value) {

  }

  checkRegionPlacement(puzzleString, row, column, value) {

  }

  solve(puzzleString) {
    
  }
}

module.exports = SudokuSolver;

