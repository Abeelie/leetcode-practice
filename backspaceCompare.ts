const backspaceCompare = (s: string, t: string): boolean => {
    const strs: string[] = [s, t];
    let idx: number = -1;
  
    while (++idx < strs.length) {
      const stack: string[] = [];
      let currStr: string = strs[idx];
  
      for (let i = 0; i < currStr.length; i++) {
        currStr[i] === "#" ? stack.pop() : stack.push(currStr[i]);
      }
  
      strs[idx] = stack.join("");
    }
  
    return strs[0] === strs[1];
  };