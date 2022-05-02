const repeatedSubstringPattern = (s: string): boolean => {
    let i: number = 0, subString: string = "";
  
    while(++i < s.length){
      subString += s[i-1];
      const count: number = Math.floor(s.length / i);
      const repeatedSubString: string = subString.repeat(count);
      if(repeatedSubString === s) return true;
    }
  
    return false;
};