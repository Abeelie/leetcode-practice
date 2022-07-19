const numOfSubarrays = (arr: number[], k: number, threshold: number): number => {
    let windowSize: number = 0;
    let count: number = 0;
    let prev: number = 0;
    let sum: number = 0;
  
    for(let i = 0; i < arr.length; i++){
      sum += arr[i];
      windowSize++;
      
      if(windowSize === k){
        if(sum / k >= threshold){
          count++
        }
  
        sum -= arr[prev];
        prev++
        windowSize--;
      }
    }
  
    return count;
  };