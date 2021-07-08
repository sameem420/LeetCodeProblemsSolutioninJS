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

// Solution # 2
var diagonalSum = function(mat) {
    let ans = 0;
    let middle = Math.floor(mat.length/2);
    for(let i=0; i<mat.length; i++){
        ans = ans + mat[i][i];
        ans = ans + mat[i][mat.length - 1 - i];
    }
	/* when the matrix is of odd length, the middle element is counted two times, 
	i.e, once in primary diagonal, and then once in secondary diagonal
	So, we need to subtract the value of the middle element if it is an odd length matrix. */
	
    ans = mat.length % 2 === 0 ? ans : ans - mat[middle][middle];
    return ans;
};

// Solution # 3
var diagonalSum = function(mat) {
    let sum = 0;
    
    for (let i = 0; i < mat.length; i++) {
        sum+= mat[i][i];   
        if (i != (mat.length - i - 1)) {
            sum+= mat[i][mat.length - i - 1];
        }
    }
    
    return sum;
};

// Solution # 4
var diagonalSum = function(mat) {
    const n = mat.length;
    let sum = 0;
    
    for (let i = 0; i < n; i++) {
            sum += mat[i][i];
            sum += n % 2 === 1 && i === n - i - 1 ? 0 : mat[i][n - i - 1];
    }
    
    return sum;
};

// Solution # 5
const diagonalSum = (mat) => {
    let sum = 0
    let j = mat[0].length - 1
  
    mat.forEach((row, i) => {
      if(i !== j - i)
        sum += row[j - i]
      sum += row[i]
    })
  
    return sum
}

// Solution # 6
var diagonalSum = function(mat) {
    const len = mat.length
    let [sum, offset] = [0, 0]
    for (let i = 0, j = len - 1; i < len; i++, j--) {
      if (i === j) offset += mat[i][i]
      sum += mat[i][i] + mat[i][j]
    }
    return sum - offset
  };


console.log(diagonalSum([[1,2,3],[4,5,6],[7,8,9]]));