const guessNumber = (n: number): number => {
    let low: number = 1, high: number = n;
  
    while(low<=high){
      const mid: number = Math.floor((low+high)/2);
      
      if(guess(mid) === 0) return mid;
      else if(guess(mid) === 1) low = mid+1;
      else high = mid-1;
    }
  
    return -1;
};