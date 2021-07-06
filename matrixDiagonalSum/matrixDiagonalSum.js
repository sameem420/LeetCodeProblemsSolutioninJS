                                    //      PROBLEM NUMBER # 1572 - MATRIX DIAGONAL SUM


// Solution # 1
var diagonalSum = function(mat) {
    let sum = 0;
    for(let i=0; i<mat.length; i++) {
        sum = sum + mat[i][i]
    }
    let j = mat.length - 1;
    for(let i=0; i<mat.length; i++) {
        if(i != j) {
            sum = sum + mat[i][j]
        }
        j = j-1;
    }
    return sum;
};


console.log(diagonalSum([[1,2,3],[4,5,6],[7,8,9]]));