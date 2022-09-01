const dailyTemperatures = (temperatures: number[]): number[] => {
    const answer: number[] = [];
    let otherDays: boolean = false;
    let days: number = 1;
    
    for(let i = 0; i < temperatures.length; i++){
        const currTemp: number = temperatures[i];
        otherDays = false;
        
        for(let j = i + 1; j < temperatures.length; j++){
            const nextTemp: number = temperatures[j];
            
            if(currTemp < nextTemp) {
                answer.push(days);
                days = 1;
                otherDays = true;
                break;
            }else{
                days++;
            }
        }
        
        if(!otherDays){
            answer.push(0);
            days = 1;
        }
    }
    
    return answer;
};