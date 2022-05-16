const countPrimeSetBits = (left, right) => {
    let count = 0;
    const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
    while(left <= right){
      const binary = left.toString(2);
      const findOnes = (
        binary.split("").filter(b => b === "1")
      );
      const len = findOnes.length;
      
      if(primes.has(len)) count++;
      
      left++;
    }
    
    return count;
};