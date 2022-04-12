const countSegments = (s: string): number => {
    const stringArray: string[] = s.split(" ");
    let count: number = 0;
    
    stringArray.forEach(char => {
      if(char !== ""){
        count++;
      }
    })
    return count;
  };