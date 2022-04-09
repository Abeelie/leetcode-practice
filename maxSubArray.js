const maxSubArray = nums => {
    let currentMax = nums[0];
    let endMax = 0;
    for(const num of nums){
        endMax += num;
        currentMax = Math.max(currentMax, endMax);
        if(endMax < 0) endMax = 0;
    }
    return currentMax;
}

