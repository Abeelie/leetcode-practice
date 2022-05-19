const countWords = (words1: string[], words2: string[]): number => {
    const w1Map: {} = freqCounter(words1);
    const w2Map: {} = freqCounter(words2);
    let count: number = 0;
  
    for(const key in w1Map){
      if(w1Map[key] === 1 && w2Map[key] === 1) {
          count++;
      }
    }
  
    return count;
  };
  
  
  const freqCounter = (words: string[]): {} => {
    const wordsMap: {} = {};
    
    words.forEach(word => {
      wordsMap[word] = (wordsMap[word] || 0) + 1;
    });
  
    return wordsMap;
  }