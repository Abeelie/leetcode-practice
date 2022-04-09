const thirdMax = nums => {
    const removedDup = [...new Set(nums)];
    const max = Math.max(...removedDup);
    removedDup.sort((a,b) => b-a);
    let i = 2;
    while(i>0){
        removedDup.shift();
        i--;
    }
    return removedDup.length >= 1 ? removedDup[0] : max;
}