const checkPerfectNumber = (num) => {
    const array = num / 2;
    let i = 0, sum = 0;
  
    while(i <= array){
      if(num % i === 0){
        sum += i;
      }
      i++;
    }
  
    return sum === num;
  };
  