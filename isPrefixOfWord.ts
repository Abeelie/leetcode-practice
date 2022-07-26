const isPrefixOfWord = (sentence: string, searchWord: string): number => {
    const _sentence: string[] = sentence.split(" ");
  
    for(const [i, word] of _sentence.entries()) {
      let j = 0; 
      let k = 0;
        
        while(j < word.length && k < searchWord.length){
          if(word[j] === searchWord[k]){
            j++;
            k++;
        }else{ 
          break;
           }
         }
        
      if(k === searchWord.length) return i + 1; 
      
    };
  
    return -1;
  };