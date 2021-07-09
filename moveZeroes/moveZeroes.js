                                        //      PROBLEM NUMBER # 283 - MOVE ZEROES


// Solution # 1
var moveZeroes = function(nums) {
    for(let i = nums.length; i--;) {
        if(nums[i] == 0) {
            nums.splice(i,1);
            nums.push(0);
        }
    }
};

console.log(subarraySum([0,1,0,3,12]));