const maxAscendingSum = (nums: number[]): number => {
    let max: number = -Infinity;
    let sum: number = 0;
  
    for(let i = 0; i < nums.length; i++){
      const curr: number = nums[i];
      const next: number = nums[i+1];
      
      if(curr < next || i === nums.length-1){
        sum += curr;
        max = Math.max(sum, max);
      }else{
        sum += curr;
        max = Math.max(sum, max);
        sum = 0;
      }
    }
  
    return max;
};