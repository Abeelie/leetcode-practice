const largestSumAfterKNegations = (nums: number[], k: number): number => {
    while(k > 0){
      const currMin: number = Math.min(...nums);
      let i: number = -1; 
      let currMinIndex: number = 0;
        
      while(i++ < nums.length){
        if(nums[i] === currMin){
          currMinIndex = i;
        }
      }
        
      nums[currMinIndex] *= -1;
      k--;
        
    }
    
    return nums.reduce((prev,curr) => prev + curr, 0);
  }