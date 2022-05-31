const findLongestWord = (s, dictionary) => {
    let longestWord = "";
  
    for(let i = 0; i < dictionary.length; i++){
      const dictWord = dictionary[i];
      const len = findSubSequence(dictWord, s);
      
      if(len === dictWord.length){
        const rule1 = longestWord.length < dictWord.length;
        const rule2 = (
          longestWord > dictWord && 
          longestWord.length === dictWord.length
        );
  
        if(rule1 || rule2){
          longestWord = dictWord;
        }
      }
    }
  
    return longestWord;
  };
  
  
const findSubSequence = (word1, word2) => {
    let j = 0;
    let k = 0;
      
    while(j < word1.length && k < word2.length){
      if(word1[j] === word2[k]) j++;
      k++;
    }
  
    return j;
}