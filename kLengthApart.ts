const kLengthApart = (nums: number[], k: number): boolean => {
    const onesIdx: number[] = [];
  
    nums.forEach((num: number, i: number) => {
      if(num === 1) onesIdx.push(i);
    });
  
    for(let i: number = 0; i < onesIdx.length - 1; i++){
      const distance: number = (onesIdx[i+1] - onesIdx[i]) - 1;
        
      if(distance < k) return false; 
    }
  
    return true;
  };