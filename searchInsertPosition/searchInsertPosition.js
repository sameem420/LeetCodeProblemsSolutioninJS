                                        //      PROBLEM NUMBER # 35 - SEARCH INSERT POSITION


// Solution # 1
var searchInsert = function(nums, target) {
    let i = 0;
    while(nums[i] < target){
        i++;
        if(nums[i] === target){
            break;
        }
    }
    return i;
}

// Solution # 2
var searchInsert = function(nums, target) {
    let index = 0;
    for(let i=0; i<nums.length; i++) {
        if(nums[i] == target) {
            index = i;
        }
        if(nums[i] < target) index = i + 1; 
        else break;
    }
    return index;
};

// Solution # 3
var searchInsert = function(nums, target) {
    return (nums.indexOf(target) == -1)
    ? nums.filter(n => { 
        return n < target; 
    }).length
    : nums.indexOf(target);
};

// Solution # 4
var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (target <= nums[i]) {
            return i;
        }
    }
    return nums.length;
};

// Solution # 5
var searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length-1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(nums[mid] == target){
            return mid;
        } else if (nums[mid] > target){
            high = mid-1;
        } else {
            low = mid+1;
        }
    }
    return low;
};


// Solution # 6
var searchInsert = function(nums, target) {
    let pos = nums.length;
    
    for(let i = 0; i < nums.length; i++) {
        if( nums[i] > target || target == nums[i] ) {
            pos = i;
            break;
        }
    }
    
    return pos;
};

// Solution # 7
var searchInsert = function(nums, target) {
    if (target < nums[0]) return 0;
    if (target > nums[nums.length-1]) return nums.length;
    
    for (let i=0 ; i<nums.length ; i++) {
        if (nums[i] === target || (nums[i] > target && nums[i-1] < target)) {
            return i;
        } else if (nums[i] > target) {
            return i-1
        }
    }
};

// Solution # 8
var searchInsert = function(nums, target) {
    let index = nums.indexOf(target)
    if(index !== -1) return index;
    if(nums[nums.length-1] < target) return nums.length
    
    for(num of nums) {
        if(num > target) {
            return nums.indexOf(num)
        }
    }
};

// Solution # 9
var searchInsert = function(nums, target) {
    var i = 0;
    while(target > nums[i]) {
        i++;
    }
    return i;
};

// Solution # 10
var searchInsert = function(nums, target) {
    return nums.filter(x => x < target).length;
};


console.log(searchInsert([1,3,5,6],5));

console.log(searchInsert([3,7,10,15],9));