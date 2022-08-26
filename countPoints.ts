const countPoints = (rings: string): number => {
    const set = new Set(["R", "G", "B"]);
    const dict: {} = {};
    let count: number = 0;
    
    for(let i: number = 0; i < rings.length - 1; i+=2){
        const ring: string = rings[i];
        const rod: string = rings[i + 1];
        
        if(!dict[rod]) {
            dict[rod] = [];
        }
        
        dict[rod].push(ring);
    }
    
    for(const rod in dict){
        const removedDuplicates = new Set([...dict[rod]]);
        const hasAllThreeColors: boolean = removedDuplicates.size === set.size;
        
        if(hasAllThreeColors) {
            count++;
        }
    }
    
    return count;
};