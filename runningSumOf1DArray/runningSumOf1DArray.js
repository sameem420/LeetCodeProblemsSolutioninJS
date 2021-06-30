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

console.log(runningSum([1,2,3,4]));
console.log(runningSum([10,15,30,60]));