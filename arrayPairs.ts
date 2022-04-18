const divideArray = (nums: number[]): boolean => {
    const dict: {} = {};
    nums.forEach(num => {
      dict[num] = (dict[num] || 0)+1
    });
  
    for(const key in dict){
      if(dict[key] % 2 !== 0) {
        return false;
      }
    }
  
    return true;
  };