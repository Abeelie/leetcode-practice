const canBeEqual = (target, arr) => {
    const targetDict = {}, arrDict = {};
    let i = 0;
    while(i<target.length && i<arr.length){
      targetDict[target[i]] = (targetDict[target[i]] || 0) + 1;
      arrDict[arr[i]] = (arrDict[arr[i]] || 0) + 1;
      i++;
    }
    for(const key in targetDict){
      if(targetDict[key] !== arrDict[key]){
        return false;
      }
    }
    return true;
  };