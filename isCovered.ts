const isCovered = (ranges: number[][], left: number, right: number): boolean => {
    const numbersToCover: any[] = [];
  
    for(let i: number = left; i <= right; i++){
      numbersToCover.push(i);
    }
  
    for(const interval of ranges){
      const [start, end] = interval;
        
      numbersToCover.forEach((num, i, nums) => {
        if(num >= start && num <= end){
          nums[i] = "covered";
        }
      });
    }
      
    return numbersToCover.every(num => num === "covered");
  };