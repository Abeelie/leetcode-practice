const calculateTime = (keyboard, word) => {
    const dict = {};
    let prevIndex = 0;
    let time = 0;
    
    for(let i = 0; i < keyboard.length; i++){
        dict[keyboard[i]] = i;
    }
    
    for(let i = 0; i < word.length; i++){
        time += Math.abs(prevIndex - dict[word[i]]);
        prevIndex = dict[word[i]];
    }
    
    return time;
};