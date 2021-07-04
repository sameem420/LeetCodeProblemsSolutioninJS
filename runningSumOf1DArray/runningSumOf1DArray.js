                                            //    PROBLEM NUMBER # 1480 - RUNNING SUM OF 1D ARRAY


// Solution # 1                                            
var runningSum = function(nums) {
  let sum = 0;
  for(let i=0; i < nums.length; i++) {
      sum += nums[i];
      nums[i] = sum
  }
  return nums;
};

// Solution # 2
const runningSum = nums => {
  nums.reduce((a,c,i,arr) => arr[i] += a)
  return nums
}

// Solution # 3
var runningSum = function(nums) {
  for(let i=1;i<nums.length;i++){
      nums[i] += nums[i-1]
  }
  return nums
};

// Solution # 4
var runningSum = function(nums) {
  let sum = 0
  for (let i in nums) {
      sum += nums[i]        
      nums[i] = sum
  }
  return nums
};

// Solution # 5
var runningSum = function(nums) {
  let runningTotal = 0;
return nums.map(num => runningTotal += num);
};

// Solution # 6
const runningSum = nums => nums.forEach((n, i) => nums[i] = (nums[i-1] || 0) + n) || nums;


console.log(runningSum([1,2,3,4]));
console.log(runningSum([10,15,30,60]));