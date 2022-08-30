const sumOddLengthSubarrays = (arr: number[]): number => {
    let windowSize: number = 1;
    let sum: number = 0;
    
    while(windowSize < arr.length + 1){
        let currSum: number = 0;
        let prev: number = 0;
        let length: number = 0;
        
        for(const num of arr){
            currSum += num;
            length++;
            
            if(length === windowSize){
                sum += currSum;
                currSum -= arr[prev];
                prev++;
                length--;
            }
        }
        
        windowSize += 2;
    }
    
    return sum;
};