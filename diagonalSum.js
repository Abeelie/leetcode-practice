const diagonalSum = mat => {
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    let commonValue = 0;
    for(let row=0, column=mat.length-1; row<mat.length; row++, column--){
        leftDiagonalSum += mat[row][row];
        rightDiagonalSum += mat[row][column];
        if(row === column) commonValue=mat[row][column];
    }
    return leftDiagonalSum + rightDiagonalSum - commonValue;
}