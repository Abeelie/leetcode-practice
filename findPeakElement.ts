const findPeakElement = (nums: number[]): number => {
    let left: number = 0;
    let right: number = nums.length - 1;
    
    while(left !== right){
        const mid: number = Math.floor((left + right) / 2);
        const currMidNum: number = nums[mid];
        const nextNum: number = nums[mid + 1];
        
        if(currMidNum < nextNum){
            left = mid + 1
        }else{
            right = mid;
        }
    }
    
    return left;
};