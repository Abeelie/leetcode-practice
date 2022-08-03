const bestHand = (ranks: number[], suits: string[]): string => {
    const map: {} = {};
    ranks.forEach(rank => map[rank] = (map[rank] || 0) + 1);
    const keysValues: string[] = Object.keys(map);
    
    switch(true){
        case new Set([...suits]).size === 1:
            return "Flush";
            
        case keysValues.filter(num => map[num] >= 3).length === 1:
            return "Three of a Kind";
            
        case keysValues.filter(num => map[num] === 2).length >= 1:
            return "Pair";
            
        default:
            return "High Card";
    }
};