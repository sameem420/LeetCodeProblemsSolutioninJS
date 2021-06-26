                                        //      PROBLEM NUMBER # 560 - SUBARRAY SUM EQUALS K


// Solution # 1
var subarraySum = function(nums, k) {
    let map = {0: 1};
    let sum = 0;
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map[sum - k]) {
            count += map[sum - k];
        }
        map[sum] = map[sum] ? map[sum] + 1 : 1;
    }
    return count;
};

// Solution # 2
var subarraySum = function(nums, k) {  
    let map = new Map();
    let sum = 0;
    let count = 0;
    map.set(0,1);
    for (let i=0;i<nums.length;i++) {
        sum += nums[i];
        if (map.has(sum-k)) count += map.get(sum-k);
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
};


console.log(subarraySum([1,1,1], 2));