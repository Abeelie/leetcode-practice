const largestGoodInteger = (num: string): string => {
    const goodInts: any[] = [];
    let count: number = 1; 
    let i: number = 0;
  
    while(i < num.length){
      if(num[i] === num[i+1]) {
        count++;
      }else {
        count = 1;
      }
      
      if(count === 3){
        const str: string = num[i-1] + num[i] + num[i+1];
        goodInts.push(str);
        count = 1;
      }
      
      i++;
      
    }
  
    goodInts.sort((a,b) => b - a);
  
    return !goodInts.length ?  "" : goodInts[0];
  };