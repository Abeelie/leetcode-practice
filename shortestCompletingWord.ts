const shortestCompletingWord = (licensePlate: string, words: string[]): string => {
    let minLength: number = Infinity;
    let licenseString: string = "";
    let shortestWord: string = "";
  
    licensePlate.split("").forEach(char => {
      if(isNaN(+char)) licenseString += char.toLowerCase();
    });
  
    for(const word of words){
      const dict: {} = {};
      let count: number = 0;
      
      for(const letter of word){
        dict[letter] = (dict[letter] || 0) + 1; 
      }
      
      for(const letter of licenseString){
        if(dict[letter] > 0){
          dict[letter]--;
          count++;
        }else{
          break;
        }
      }
  
      if(count === licenseString.length){
        if(word.length < minLength){
          minLength = word.length;
          shortestWord = word;
        }
      }
    }
  
    return shortestWord;
  };