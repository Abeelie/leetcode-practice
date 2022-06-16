const isPrefixString = (s: string, words: string[]): boolean => {
    let compareStr: string = "";
    let j: number = 0;
    let str: string = "";
  
    for(let i = 0; i < s.length; i++){
      str += s[i];
  
      if(str === words[j]){
        compareStr += words[j];
        str = "";
        j++;
      }
      
    }
  
    return s === compareStr;
  };