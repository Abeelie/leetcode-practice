const checkZeroOnes = (s: string): boolean => {
    if(!s.includes("1")) return false;
    if(!s.includes("0")) return true;
    
    let oneCount: number = 1;
    let zeroCount: number = 1;
    let longOne: number = -Infinity;
    let longZero: number = -Infinity;
    let i: number = 0;
  
    while(i < s.length){
      const curr: string = s[i]; 
      const next: string = s[i+1];
      
      if(curr === "1" && next === "1") oneCount++
      else oneCount = 1;
    
      if(curr === "0" && next === "0") zeroCount++
      else zeroCount = 1;
  
      longOne = Math.max(longOne, oneCount);
      longZero = Math.max(longZero, zeroCount);
      
      i++;
    }
  
    return longOne > longZero;
};