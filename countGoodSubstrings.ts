const countGoodSubstrings = (s: string): number => {
    const stringArray: string[] = s.split("");
    const goodSubstrings: string[] = [];
    let k: number = 3, str: string = "";
  
    for(let i: number = 0; i<stringArray.length; i++){
      str += stringArray[i];
      if(str.length === k){
        if(str.length === new Set([...str]).size){
          goodSubstrings.push(str);
        }
        str = str.slice(1);
      }
    }
    return goodSubstrings.length;
  };