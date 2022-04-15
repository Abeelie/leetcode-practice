const decompressRLElist = (nums: number[]): number[] => {
    const decompressedList: number[] = [];
  
    for(let i: number = 0; i<nums.length; i+=2){
      let [freq,value]: number[] = nums.slice(i,i+2);
        
      do{
        decompressedList.push(value);
        freq--;
      }while(freq>0);
      
    }
    return decompressedList;
  };
  