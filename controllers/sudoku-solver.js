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
    const rowValues = puzzleString.slice(row*9, row*9+9);
    return (rowValues.indexOf(value) === -1)
  }

  checkColPlacement(puzzleString, row, column, value) {
    const columnValues = puzzleString.split("").filter((char, index) => {
      if((index-(column))%9 === 0) return char;
    }).join("")

    return (columnValues.indexOf(value) === -1)
  }

  checkRegionPlacement(puzzleString, row, column, value) {
    console.log(row)
    let rowValues = puzzleString.slice(row*9, row*9+9); 
    rowValues = rowValues.slice(Math.floor(row/3)*3, Math.floor(row/3)*3+3);
    return false;
  }

  solve(puzzleString) {
    
  }
}

module.exports = SudokuSolver;

