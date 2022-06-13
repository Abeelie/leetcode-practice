const luckyNumbers = (matrix: number[][]): number[] => {
    const luckyNumbersFound: number[] = [];
  
    for(let row = 0; row < matrix.length; row++){
      const minNumInRow: number = Math.min(...matrix[row]);
      const idxOfMinNumInRow: number = matrix[row].indexOf(minNumInRow);
      const columnValues: number[] = [];
  
      for(let column = 0; column < matrix.length; column++){
        columnValues.push(matrix[column][idxOfMinNumInRow]);
      }
  
      const maxNumInColumn: number = Math.max(...columnValues);
  
      if(minNumInRow === maxNumInColumn){
        luckyNumbersFound.push(minNumInRow);
      }
    }
  
    return luckyNumbersFound;
  };