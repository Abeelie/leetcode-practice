const isSumEqual = (fWord: string, sWord: string, tWord: string): boolean => {
    const len: number = Math.max(fWord.length, sWord.length, tWord.length);
  
    const dict: {} = {
      "a": "0", "b": "1", "c": "2", "d": "3", "e": "4", 
      "f": "5", "g": "6", "h": "7", "i": "8", "j": "9"
    }
    
    let i: number = 0, j: number = 0, k: number = 0; 
    let num1: string = "", num2: string = "", num3: string = "";
  
    while(i < len && j < len && k < len){
      if(dict[fWord[i]]) num1 += dict[fWord[i]];
      if(dict[sWord[j]]) num2 += dict[sWord[j]];
      if(dict[tWord[k]]) num3 += dict[tWord[k]];
      i++, j++, k++;
    }
  
    return +num1 + +num2 === +num3;
  };