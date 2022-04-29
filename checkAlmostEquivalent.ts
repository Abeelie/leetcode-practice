const checkAlmostEquivalent = (word1: string, word2: string): boolean => {
    const word1Dict: {} = {}, word2Dict: {} = {};
    const combinedWord: string = word1 + word2;
    let i: number = 0, j: number = 0;
  
    while(i < word1.length && j < word2.length){
      word1Dict[word1[i]] = (word1Dict[word1[i]] || 0) + 1;
      word2Dict[word2[i]] = (word2Dict[word2[i]] || 0) + 1;
      i++, j++;
    }
  
    for(const char of combinedWord){
      const v1: number = word1Dict[char] || 0;
      const v2: number = word2Dict[char] || 0;
      const diff: number = Math.abs(v1-v2);
      if(diff > 3) return false;
    }
  
    return true;
};