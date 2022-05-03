const divideString = (s: string, k: number, fill: string): string[] => {
    const group: string[] = [];
  
    for(let i: number = 0; i < s.length; i+=k){
      const slice: string = s.substring(i, i+k);
      group.push(slice);
    }
  
    if(group[group.length-1].length < k){
      const lastStrlen: number = group[group.length-1].length;
      const update: string = fill.repeat(k - lastStrlen);
      group[group.length-1] += update;
    }
  
    return group;
};