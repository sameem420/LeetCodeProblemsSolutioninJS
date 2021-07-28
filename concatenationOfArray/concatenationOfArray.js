                                    //  PROBLEM NUMBER # 1929 - Concatenation of Array

// Solution # 1
var getConcatenation = function(nums) {
    let ans = [...nums, ...nums];
    return ans;
};

console.log(getConcatenation([2,2,1]));
console.log(getConcatenation([4,3,3,1,4]));