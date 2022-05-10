const squareIsWhite = (coordinates: string): boolean => {
    const digitPosition: string[] = coordinates.split("");
    const evenWhiteLetters = new Set(["a", "c", "e", "g"]);
    const oddWhiteLetters = new Set(["b", "d", "f", "h"]);

    const check1: boolean = (
      evenWhiteLetters.has(digitPosition[0]) 
      && +digitPosition[1] % 2 === 0
    );
    
    const check2: boolean = (
      oddWhiteLetters.has(digitPosition[0])
      && +digitPosition[1] % 2 !== 0
    );
  
    return check1 || check2;
};