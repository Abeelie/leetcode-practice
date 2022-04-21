const areOccurrencesEqual = (s) => {
    const dict = {};
    let freq = 0;
  
    for(let i = 0; i<s.length; i++){
      dict[s[i]] = (dict[s[i]] || 0) + 1;
      freq = dict[s[i]];
    }
    
    return Object.keys(dict).every(char => {
      return dict[char] === freq;
    });
  };