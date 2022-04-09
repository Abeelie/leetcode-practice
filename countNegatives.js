const countNegatives = grid => {
    let count = 0;
    for(const row of grid){
        for(const columnValue of row){
            if(Math.abs(columnValue) !== columnValue){
                count++;
            }
        }
    }
    return count;
}