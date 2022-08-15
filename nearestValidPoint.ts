const nearestValidPoint = (x: number, y: number, points: number[][]): number => {
    const [x1, y1]: number[] = [x, y];
    let smallestIndex: number = -1;
    let smallestManhattanDistance: number = Infinity;
  
    for (const [i, point] of points.entries()) {
      const [x2, y2]: number[] = point;
  
      if (x2 === x1 || y2 === y1) {
        const currManhattanDistance: number = Math.abs(x1 - x2) + Math.abs(y1 - y2);
  
        if (currManhattanDistance < smallestManhattanDistance) {
          smallestManhattanDistance = currManhattanDistance;
          smallestIndex = i;
        }
      }
    }
  
    return smallestIndex;
  };