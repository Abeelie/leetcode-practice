const arrayChange = (nums: number[], operations: number[][]): number[] => {
    const map: {} = {};
    
    for(const [i, num] of nums.entries()) map[num] = i;
    
    for(const [prevNum, newNum] of operations){   
        if(prevNum in map){
            const index: number = map[prevNum];
            nums[index] = newNum;
            map[newNum] = index;   
        }
    }
    
    return nums;
};