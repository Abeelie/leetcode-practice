const judgeCircle = moves => {
    let up = 0, right = 0;
    for(const move of moves){
        if(move === "U") up++;
        else if(move === "D") up--;
        else if(move === "L") right--;
        else if(move === "R") right++;
    }
    return up === 0 && right === 0;
}