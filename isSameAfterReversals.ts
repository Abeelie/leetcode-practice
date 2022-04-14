const isSameAfterReversals = (num: number): boolean => {
    let nums: number[] = new String(num).split("").map(Number);
    reverse(nums);
    let i: number = 0;
    while(i<nums.length){
      if(nums[0] === 0){nums.splice(i,1), i--}
      i++;
    }
    return +reverse(nums).join("") === num;
  };
  
  const reverse = (nums: number[]): number[] => {
    let left: number = 0, right: number = nums.length-1;
    while(left<right){
      let temp: number = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right--;
    }
    return nums;
  }