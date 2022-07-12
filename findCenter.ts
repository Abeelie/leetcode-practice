const findCenter = (edges: number[][]): number => {
    const nodesCount: number[] = new Array(edges.length + 2).fill(0);
  
    for(const [i, j] of edges){
      nodesCount[i] += 1;
      nodesCount[j] += 1;
    }
  
    return nodesCount.indexOf(edges.length);
};