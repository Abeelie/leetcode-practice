const targetIndices = (nums, target) => {
    const sortedNums = insertionSort(nums);
    let result = [];
    for(let i=0; i<sortedNums.length; i++){
        if(sortedNums[i] === target){
            result.push(i);
        }
    }
    return result;
}

const insertionSort = array => {
    for(let i=1; i<array.length; i++){
        for(let j=i; j>=0; j--){
            if(array[j] < array[j-1]){
                let temp = array[j];
                array[j] = array[j-1];
                array[j-1] = temp;
            }
        }
    }
    return array;
}