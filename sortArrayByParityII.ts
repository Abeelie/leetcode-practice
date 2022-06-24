const sortArrayByParityII = (nums: number[]): number[] => {
    const even: number[] = [];
    const odd: number[] = [];
  
    for(const num of nums){
      if(num % 2 === 0){
        even.unshift(num);
      }else{
        odd.unshift(num);
      }
    }
  
    for(let i = 0; i < nums.length; i++){
      if(i % 2 === 0){
        nums[i] = even.shift();
      }else{
        nums[i] = odd.shift();
      }
    }
  
    return nums;
};