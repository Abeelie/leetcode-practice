const maxPower = (s: string): number => {
    let count: number = 1;
    let max: number = 0; 
    let i: number = -1;
    
    while(i++ < s.length){
      if(s[i] === s[i+1]){
        count++;
      }else{
        max = Math.max(max, count);
        count = 1;
      }
    }
      
    return max;
  };