const canBeTypedWords = (text: string, brokenLetters: string): number => {
    const brokenSet = new Set([...brokenLetters]);
    const words: string[] = text.split(" ");
    let count: number = 0;
  
    words.forEach(word => {
      const checkLetters: string[] = word.split("").filter(letter => {
        return !brokenSet.has(letter); 
      });
  
      if(checkLetters.length === word.length){
        count++;
      }
    });
  
    return count;
  };