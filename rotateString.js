const rotateString = (s, goal) => {
    s = s.split("");
    for(const char of s){
        if(s.join("") !== goal){
            s.push(s.shift());
        }
    }
    return s.join("") === goal;
}