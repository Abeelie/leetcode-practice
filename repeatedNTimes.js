const repeatedNTimes = nums => {
    const dict = {};
    nums.forEach(num => {
        dict[num] =(dict[num] || 0) + 1
    });
    return Object.keys(dict).filter(key => (
        dict[key] > 1
    ))[0];
}