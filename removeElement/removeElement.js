                                    //      PROBLEM NUMBER # 27 - REMOVE ELEMENT


// Solution # 1
var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == val) {
            nums.splice(i,1); 
            i--;
        }
    }
    return nums.length;
};

// Solution # 2
const removeElement = (nums, val) => {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
};

// Solution # 3
var removeElement = function(nums, val) {
    while(nums.indexOf(val) !== -1) {
        nums.splice(nums.indexOf(val), 1)
    }
    return nums.length;
};


console.log(removeElement([3,2,2,3],3));
console.log(removeElement([0,1,2,2,3,0,4,2],2));