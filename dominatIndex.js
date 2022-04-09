const dominantIndex = nums => {
    const max = Math.max(...nums);
    const result = (
        nums
        .filter(num => num !== max)
        .every(num => max >= (num*2))
    );
    return result ? nums.findIndex(num => num === max) : -1;
}