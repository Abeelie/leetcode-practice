const wordPattern = (pattern: string, s: string): boolean => {
    const pMap: {} = {}, sMap: {} = {};
    let string: string[] = s.split(" "), i: number = 0;
      
    if(pattern.length !== string.length) return false;
    
    while(i < string.length){
      const match: string = pattern[i];
      const word: string = string[i];
  
      if(!pMap[match] && !sMap[word]){
        pMap[match] = word;
        sMap[word] = match;
      }
    
      if(pMap[match] !== word && sMap[word] !== match){
        return false;
      }
        
      i++;
    }
  
    return true;
  };