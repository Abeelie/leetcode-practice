const firstMissingPositive = (nums: number[]): number => {
    const set = new Set();
  
    for(const num of nums){
      if(Math.sign(num) !== -1){
        set.add(num);
      }
    }
  
    for(let i = 1; _; i++){
      if(!set.has(i)){
        return i;
      }
    }
      
  };