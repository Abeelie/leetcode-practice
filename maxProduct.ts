const maxProduct = (words: string[]): number => {
    let max: number = 0;
  
    for(let i = 0; i < words.length; i++){
      for(let j = i + 1; j < words.length; j++){
        const ruleCheck: boolean = wordsCheck(words[i], words[j]);
        
        if(ruleCheck){
          const product: number = words[i].length * words[j].length;
          max = Math.max(max, product);
        }
      }
    }
    
    return max;
  };
  
  const wordsCheck = (word1: string, word2: string) => {
    const word2Set = new Set([...word2]);
  
    for(const letter of word1){
      if(word2Set.has(letter)){
        return false;
      }
    }
    
    return true;
  }