                                        //      PROBLEM NUMBER # 189 - ROTATE ARRAY


// Solution # 1
var rotate = function(nums, k) {
    if(k>nums.length) { k = k% nums.length };
    nums.splice(0,0,...nums.splice(nums.length - k))
};

// Solution # 2
var rotate = function(nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
}

// Solution # 3
var rotate = function(nums, k) {
  for (let i = nums.length - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
  }
  for (let j = k - 1; j >= 0; j--) {
    nums[j] = nums.pop();
  }
}


console.log(rotate([1,2,3,4,5,6,7], 3));