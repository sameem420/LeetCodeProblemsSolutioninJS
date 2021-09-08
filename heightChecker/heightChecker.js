                                            //    PROBLEM NUMBER # 1051 - HEIGHT CHECKER


// Solution # 1                                            
var heightChecker = function(heights) {
  let expected_heights = [...heights];
  heights.sort((a,b) => a-b)
  let count = 0
  for(let i in heights) {
      if(heights[i] != expected_heights[i])
          count += 1
  }
  return count;
};

console.log(heightChecker([1,1,4,2,1,3]));