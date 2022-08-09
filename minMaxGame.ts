const minMaxGame = function(nums: number[]): number {
    if(nums.length === 1) return nums[0];
    
    let array: number[] = nums;
    let newNums: number[] = [];
    
    while(array.length !== 1){
        let even: number = 0;
        let i: number = 0;
        
        while(i < array.length - 1){
            if(even === 0){
                newNums.push(Math.min(array[i], array[i + 1]));
                even++;
            }else{
                newNums.push(Math.max(array[i], array[i + 1]));  
                even--;
            }
            
            i += 2;
        }
    
        array = newNums;
        newNums = [];

    }
    
    return array.pop();
};