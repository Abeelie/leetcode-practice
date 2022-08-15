const checkValid = (matrix: number[][]): boolean => {
    for(let row = 0; row < matrix.length; row++){
      const rowSet = new Set();
      const columnSet = new Set();
      
      for(let column = 0; column < matrix[0].length; column++){
        rowSet.add(matrix[row][column]);
      }
  
      if(rowSet.size !== matrix.length) return false;
  
      for(let column = 0; column < matrix.length; column++){
        columnSet.add(matrix[column][row]);
      }
  
      if(columnSet.size !== matrix.length) return false;
    }
  
    return true;
};
