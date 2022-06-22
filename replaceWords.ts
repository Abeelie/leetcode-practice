const replaceWords = (dictionary: string[], sentence: string): string => {
    const sentenceWords: string[] = sentence.split(" ");
  
    for(let i = 0; i < dictionary.length; i++){
      const dictionaryWord: string = dictionary[i];
      
      for(let j = 0; j < sentenceWords.length; j++){
        const sentenceWord: string = sentenceWords[j];
        const hasPrefix: boolean = sentenceWord.startsWith(dictionaryWord);
        
        if(hasPrefix){
          sentenceWords[j] = dictionaryWord;
        }
          
      }
    }
  
    return sentenceWords.join(" ");
  };