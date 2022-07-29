const halvesAreAlike = (s: string): Boolean => {
    const breakPoint: number = Math.floor(s.length / 2);
    const part1: string = s.substring(0, breakPoint);
    const part2: string = s.substring(breakPoint);
    const alphaSet = new Set([..."AEIOUaeiou"]);
    let half1: number = 0; 
    let half2: number = 0;
    let i: number = -1;
  
    while(i++ < breakPoint){
      if(alphaSet.has(part1[i])) half1++;
      if(alphaSet.has(part2[i])) half2++;
    }
    
    return half1 === half2;
  };