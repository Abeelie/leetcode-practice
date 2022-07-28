const validWordSquare = (words: string): boolean => {
    
    for(let row = 0; row < words.length; row++){
        const rowWord: string = words[row];
        let columnWord: string = "";
        
        for(let column = 0; column < words.length; column++){
            columnWord += words[column][row] || "";
        }
        
        if(rowWord !== columnWord){
            return false;
        }
    }
    
    return true;
};