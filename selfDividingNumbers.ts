const selfDividingNumbers = (left: number, right: number): number[] => {
    const solution: number[] = [];
    
    while(left <= right){
      const number: string = left.toString();
      if(number.length > 1){
        let i: number = 0;
        while(i < number.length){
          if(+number % +number[i] !== 0){
            break;
          }
          i++;
        }
        if(i === number.length){
          solution.push(+number);
        }
      }else{
          solution.push(+number);
      }
      left++;
    }
  
    return solution;
  };