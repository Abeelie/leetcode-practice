const specialArray = (nums: number[]): number => {
    const limit: number = Math.max(...nums);
    let i: number = 1;
  
    while(i <= limit){
      let num1: number = i; 
      let j: number = 0; 
      let count: number = 0;
      while(j < nums.length){
        let num2: number = nums[j];
        if(num1 <= num2) count++;
        j++;
      }
      if(count === num1) return num1;
      i++;
    }
    return -1;
  };