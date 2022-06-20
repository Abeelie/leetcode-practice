const countSubstrings = (s: string): number => {
    let i: number = 0;
    let original: string = "";
    let reverse: string = "";
    let count: number = 0;
  
    for(let j = i; j < s.length; j++){
      original += s[j];
      reverse = s[j] + reverse;
      
      if(original === reverse){
        count++;
      }
  
      if(j === s.length - 1){
        i++;
        j = i - 1;
        original = "";
        reverse = "";
      }
  
      if(i === s.length){
        break;
      }
    }
  
    return count;
};