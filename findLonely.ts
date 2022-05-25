const findLonely = (nums: number[]): number[] => {
    const lonelyNums: number[] = [];
    const freq: {} = freqCounter(nums);
    const set = new Set([...nums]);
  
    for(const num in freq){
      const rule1: boolean = freq[num] === 1;
      const rule2: boolean = !set.has(+num + 1);
      const rule3: boolean = !set.has(+num - 1);
  
      if(rule1 && rule2 && rule3) {
        lonelyNums.push(+num);
      }
    }
  
    return lonelyNums;
};
  
const freqCounter = (nums: number[]) => {
    const dict: {} = {};
    
    nums.forEach(num => {
      dict[num] = (dict[num] || 0) + 1;
    });
  
    return dict;
}