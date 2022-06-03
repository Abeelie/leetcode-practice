const busyStudent = (startTime: number[], endTime: number[], queryTime: number): number => {
    let count: number = 0;
    
    for(let i = 0; i < startTime.length; i++){
      const start: number = startTime[i];
      const end: number = endTime[i];
      const givenTime: boolean = start <= queryTime && queryTime <= end;
  
      if(givenTime){
        count++;
      }
    }
  
    return count;
};