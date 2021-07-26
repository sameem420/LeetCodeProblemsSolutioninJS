                                    //  PROBLEM NUMBER # 136 - SINGLE NUMBER

// Solution # 1
var singleNumber = function(nums) {
    let a = 0;
    for(let num of nums) {
        a ^= num;
    }
    return a;
};


console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,3,3,1,4]));