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
    const rowValues = puzzleString.slice(row*9, 9);
    return (rowValues.indexOf(value) === -1)
  }

  checkColPlacement(puzzleString, row, column, value) {
    const columnValues = puzzleString.split("").filter((char, index) => {
      if((index-(column))%9 === 0) return char;
    }).join("")

    console.log(columnValues);

    return (columnValues.indexOf(value) === -1)
  }

  checkRegionPlacement(puzzleString, row, column, value) {

  }

  solve(puzzleString) {
    
  }
}

module.exports = SudokuSolver;

