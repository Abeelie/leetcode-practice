const countVowelSubstrings = (word: string): number => {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    let count: number = 0;
  
    for(let i = 0; i < word.length; i++){
      const vowSet = new Set([]);
      
      for(let j = i; j < word.length; j++){
        if(vowels.has(word[j])) {
          vowSet.add(word[j]);
        }else{
          break;
        }
        
        if(vowSet.size === vowels.size) {
          count++;
        }
      }
    }
  
    return count;
};