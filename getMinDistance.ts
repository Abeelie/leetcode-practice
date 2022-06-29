const getMinDistance = (nums: number[], target: number, start: number): number => {
    let finalMinDistance : number = Infinity;
    let i: number = 0;
  
    while(i < nums.length){
      const currNum: number = nums[i];
      
      if(currNum === target){
        const currMinDistance: number = Math.abs(start - i);
        finalMinDistance  = Math.min(currMinDistance, finalMinDistance);
      }
      
      i++;
    }
  
    return finalMinDistance;
  };