const replaceDigits = (s: string): string => {
    let sArray: any[] = s.split("");
      
    for(let i = 0; i < sArray.length; i++){
      const char: string = sArray[i-1];
      const num: number = +sArray[i];
        
      if(!isNaN(num)) sArray[i] = shift(char, num);
    }
    
    return sArray.join("");
  };
  
  const shift = (char: string, num: number): string => {
    const dict: string = "-abcdefghijklmnopqrstuvwxyz";
    const value: number = dict.indexOf(char) + num;
      
    for(const char of dict) {
      if(dict.indexOf(char) === value) return char;
    }
  };