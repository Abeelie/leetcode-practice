const isHappy = (n: number): boolean => {
    let nums: string = n.toString();
  
    while(true){
      const numbers: number[] = nums.split("").map(num => Math.pow(+num, 2)); 
      const result: string = numbers.reduce((prev, curr) => (prev + curr)).toString();
      const cantBeSplit: boolean = result.length === 1 && +result < 5;
  
      if(cantBeSplit){
        nums = result;
        break;
      }
  
      nums = result;
    }
  
    return +nums === 1;
};