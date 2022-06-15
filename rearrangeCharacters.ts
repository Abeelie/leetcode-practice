const rearrangeCharacters = (s, target) => {
    const map = {};
    let running = true;
    let finalCount = 0;
  
    for(let i = 0; i < s.length; i++){
      const letter = s[i];
      map[letter] = (map[letter] || 0) + 1;
    }
  
    while(running){
      let currCount = 0;
      
      for(const letter of target){
        if(!map[letter] || map[letter] === 0){
          running = false;
        }else{
          map[letter]--;
          currCount++;
        }
      }
  
      if(currCount === target.length){
        finalCount++;
      }
      
    }
  
    return finalCount;
};