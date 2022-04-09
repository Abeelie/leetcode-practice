const findDisappearedNumbers = nums => {
    const map = {}, disappearedNumbers = [];
    nums.forEach(num => map[num] = true);
    for(let i=1; i<=nums.length; i++){
        if(!map[i]) disappearedNumbers.push(i);
    }
    return disappearedNumbers;
}