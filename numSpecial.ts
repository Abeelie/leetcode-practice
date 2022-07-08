const numSpecial = (mat: number[][]): number => {
    let finalCount: number = 0;
  
    for(let row: number = 0; row < mat.length; row++){
      const currentRow: number[] = mat[row];
      const onesIdx: number[] = [];
      let count: number = 0;
  
      currentRow.forEach((value, i) => {
        if(value === 1) onesIdx.push(i);
      });
  
      if(onesIdx.length === 1) {
  
        for(let column: number = 0; column < mat.length; column++){
          const currentColumnValue: number = mat[column][onesIdx[0]];
  
          if(currentColumnValue === 0) count++;
  
         }
      }
  
      if(count === mat.length - 1) finalCount++;
      
    }
  
    return finalCount;
  };