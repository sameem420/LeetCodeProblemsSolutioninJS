                                    //      PROBLEM NUMBER # 1920 - REMOVE ELEMENT


// Solution # 1
var buildArray = function(nums) {
    let ans = [];
    for(let num in nums) {
        ans.push(nums[nums[num]])
    }
    return ans;
};


console.log(buildArray([0,1,2,2,3,0,4,2]));