const findWinners = (matches: number[][]): number[][] => {
    const winnersRecord: {} = {};
    const loserRecord: {} = {};
    const playersWhoNeverLoss: number[] = [];
    const playersWhoLossOnce: number[] = [];
    
    for(const [winner, loser] of matches){
      winnersRecord[winner] = (winnersRecord[winner] || 0) + 1;
      loserRecord[loser] = (loserRecord[loser] || 0) + 1;
    }
  
    for(const winner in winnersRecord){
      if(!loserRecord[winner]){
        playersWhoNeverLoss.push(parseInt(winner));
      }
    }
  
    for(const loser in loserRecord){
      if(loserRecord[loser] === 1){
        playersWhoLossOnce.push(parseInt(loser));
      }
    }
  
    return [playersWhoNeverLoss, playersWhoLossOnce];
  };