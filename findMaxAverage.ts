const findMaxAverage = (nums: number[], k: number): number => {
    let maxAverage: number = -Infinity;
    let sum: number = 0; 
    let prevValue: number = 0;
  
    for(let i: number = 0; i<nums.length; i++){
      sum += nums[i];
  
      if(i-prevValue === k-1){
        let currentAverage: number = sum/k;
        maxAverage = Math.max(maxAverage, currentAverage);
        sum -= nums[prevValue];
        prevValue++;
      }
    }
    return maxAverage;
  };