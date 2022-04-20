const maximumDifference = (nums) => {
    let prevValue = Infinity, max = 0, i = 0;
    
    while(i<nums.length){
      prevValue = Math.min(prevValue,nums[i]);
      max = Math.max(max,nums[i]-prevValue);
      i++;
    }
    
    return max || -1;
  };