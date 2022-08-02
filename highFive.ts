const highFive = (items: number[][]): number[][] => {
    const map: {} = {};
    const studentsTopFive = [];
      
    for(const [id, score] of items){
        if(!map[id]) {
          map[id] = [];
      }
          
      map[id].push(score);
    }
      
    for(const id in map){
        map[id].sort((a, b) => b - a);
      const average: number = map[id].slice(0, 5).reduce((prev, curr) => prev + curr) / 5;
         studentsTopFive.push([parseInt(id), Math.floor(average)]);
    }
      
    return studentsTopFive;
  };