const findLonelyPixel = (picture: string[][]): number => {
    let lonelyPixelCount: number = 0;
      
    for(const [_, rowElements] of picture.entries()){
      const pixelsInRow: number[] = [];
      let count: number = 0;
    
      for(const [index, color] of rowElements.entries()){
        if(color === "B") pixelsInRow.push(index);
      }
          
      if(pixelsInRow.length === 1){
        const pixelRowIndex: number = pixelsInRow.pop();
              
        for(const [column, _] of picture.entries()){
          if(picture[column][pixelRowIndex] === "B") count++;
        }
              
        if(count === 1) lonelyPixelCount++;
      }
    }
      
    return lonelyPixelCount;
  };