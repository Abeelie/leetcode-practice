const reverseOnlyLetters = s => {
    let alpha = `abcdefghijklmnopqrstuvwxyz
                 ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    s = s.split("");
    let left = 0, right = s.length-1;
    while(left < right){
      if(alpha.includes(s[left]) && alpha.includes(s[right])){
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
      }
      else if(!alpha.includes(s[left])){
        left++;
      }else if(!alpha.includes(s[right])){
        right--;
      }
    }
    return s.join("");
  };