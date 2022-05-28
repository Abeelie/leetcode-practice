const findAndReplacePattern = (words: string[], pattern: string): string[] => {
    const matchedWords: string[] = [];
  
    for(let i = 0; i < words.length; i++){
      const currentWord: string = words[i];
      const isTherePattern: boolean = patternCheck(currentWord, pattern);
        
      if(isTherePattern) matchedWords.push(currentWord);
    }
  
    return matchedWords;
  };
  
  const patternCheck = (word: string, pattern: string): boolean => {
    if(word.length !== pattern.length) return false;
      
    const wordMap: {} = {};
    const patternMap: {} = {};
    let i: number = 0;
  
    while(i < word.length){
      const wordLetter: string = word[i];
      const patternLetter: string = pattern[i];
  
      if(!wordMap[wordLetter] && !patternMap[patternLetter]){
        wordMap[wordLetter] = patternLetter;
        patternMap[patternLetter] = wordLetter;
      }
  
      const checkPattern: boolean = (
        wordMap[wordLetter] !== patternLetter && 
        patternMap[patternLetter] !== wordLetter
      );
      
      if(checkPattern) return false;
  
      i++;
    }
  
    return true;
  }