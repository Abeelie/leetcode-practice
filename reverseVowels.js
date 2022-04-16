const reverseVowels = s => {
    s = s.split("");
    let foundVowel = [];
  
    s.forEach((char, i, s) => {
      if("AEIOUaeiou".includes(s[i])){
         foundVowel.push(s[i]);
         s[i] = "placeholder";
      }
    });
  
    s.forEach((char, i, s) => {
      if(s[i] === "placeholder"){
         s[i] = foundVowel.pop();
      }
    });
    
    return s.join("");
  };
  