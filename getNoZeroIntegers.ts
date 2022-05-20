const getNoZeroIntegers = (n: number): number[] => {
    let left: number = 1;
    let right: number = n - 1;
  
    while(left <= right){
      const lStr = new Set([...left.toString()]);
      const rStr = new Set([...right.toString()]);
      const rule1: boolean = !lStr.has("0") && !rStr.has("0");
      const rule2: boolean = left + right === n;
      
      if(rule1 && rule2){
        return [left, right]; 
      }
  
      left++;
      right--;
    }
  
    return [];
};