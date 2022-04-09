const checkIfExist = arr => {
    const set = new Set();
    for(const num of arr){
        if(set.has(num*2) || set.has(num/2)){
            return true;
        }
        set.add(num);
    }
    return false;
}