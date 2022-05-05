const findGCD = (nums: number[]): number => {
    const smallestNum: number = Math.min(...nums);
    const largestNum: number = Math.max(...nums);
    let greatestCommonDivisor: number = 0;
    let i: number = 0;
      
    while(i++ <= largestNum){
      const checkSmall: boolean = smallestNum % i === 0;
      const checkLarge: boolean = largestNum % i === 0;
      if(checkSmall && checkLarge) greatestCommonDivisor = i;    
    }
  
    return greatestCommonDivisor;
  };