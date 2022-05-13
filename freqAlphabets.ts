const freqAlphabets = (s: string): string => {
    const alpha: string[] = "-abcdefghijklmnopqrstuvwxyz".split("");
    let res: string = "";
    let i: number = 0;
    
    while(i < s.length){
      const curr: string = s[i];
      const next: string = s[i+1];
      const hashTag: string = s[i+2];
      
      if(hashTag === "#"){
        const position: number = Number(curr + next);
        const char: string = alpha[position];
        res += char;
        i += 2;
      }else {
        const position: number = Number(curr);
        const char: string = alpha[position];
        res += char;
      }
      
      i++;
    }
  
    return res;
}