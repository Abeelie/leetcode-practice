const kWeakestRows = (mat: number[][], k: number): number[] => {
    const rowMap: {} = {};
  
    for(let row = 0; row < mat.length; row++){
      rowMap[row] = mat[row].filter(num => num === 1).length;
    }
  
    const result: any[] = Object.keys(rowMap).sort((a, b) => {
      return rowMap[a] - rowMap[b];
    });
  
    return result.slice(0, k);  
};