const modifyString = (s: string): string  => {
    let string: string[] = s.split("");
    let letters: string = "abcdefghijklmnopqrstuvwxyz";
    let i: number = -1;

    while(i++ < string.length){
        if(string[i] === "?"){
            let j: number = -1;
        
            while(j++ < letters.length){
                if(letters[j] !== string[i-1] && letters[j] !== string[i+1]) {
                    string[i] = letters[j];
                    break;
                }       
            }
        }
    }

    return string.join("");
};