const greatestLetter = (s: string): string => {
    const map: {} = {};
    let greatLetter: string = "";
    
    for(let i = 0; i < s.length; i++) map[s[i]] = true;
    
    for(let i = 0; i < s.length; i++){
        const letter = s[i];
        
        if(letter > greatLetter){
            if(letter === letter.toUpperCase() && letter.toLowerCase() in map){
                greatLetter = letter;
            }else if(letter === letter.toLowerCase() && letter.toUpperCase() in map){
               greatLetter = letter;
            }
        }
    }
    
    return greatLetter.toUpperCase();
};