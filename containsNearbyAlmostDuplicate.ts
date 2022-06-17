const containsNearbyAlmostDuplicate = (nums: number[], k: number, t: number): boolean => {
    let i: number = 0;
      
    for(let j = i + 1; j < nums.length; j++){
      const rule1: boolean = Math.abs(nums[i] - nums[j]) <= t;
      const rule2: boolean = Math.abs(i - j) <= k;
          
      if(rule1 && rule2){
        return true;
      }
          
      if(j === nums.length - 1){
        i++;
        j = i;
      }
          
      if(i === nums.length - 1){
        break;
      }
    }
  
    return false;
};