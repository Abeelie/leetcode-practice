const findClosestNumber = (nums: number[]): number => {
    let i: number = -1;
    let prev: number = Infinity; 
    let closestNumber: number = 0;
    const numSet = new Set([...nums]);
  
    while(i++ < nums.length){
      const distance: number = Math.abs(nums[i] - 0);
      
      if(distance < prev){
        prev = distance;
        closestNumber = nums[i];
      }
      
      if(numSet.has(Math.abs(closestNumber))){
        closestNumber = (Math.abs(closestNumber));
      }
      
    }
  
    return closestNumber;
  };