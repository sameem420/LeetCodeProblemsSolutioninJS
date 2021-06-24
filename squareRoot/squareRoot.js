                                            //    PROBLEM NUMBER # 69 - Sqrt(x)


// Solution # 1                                            
var mySqrt = function(x) {
    return parseInt(x**0.5);
};

// Solution # 2
var mySqrt = function(x) {
    let result = 1;
    while (result*result <= x) result++;
    return result - 1;
};

// Solution # 3
var mySqrt = function(x) {
    let i = 0;
    let value = 0;
    while(value < x){
      value = i * i; 
      if(value < x)
      i++; 
    }
    return value == x ? i : i-1;
};

// Solution # 4
var mySqrt = function (x) {
    let left = 0;
    let right = Math.ceil(x / 2);
    let mid = 0;
  
    while (left <= right) {
      mid = Math.floor((left + right) / 2);
      if (mid * mid < x) left = mid + 1;
      else if (mid * mid > x) right = mid - 1;
      else return mid;
    }
    return right;
};


console.log(mySqrt(4));
console.log(mySqrt(8));