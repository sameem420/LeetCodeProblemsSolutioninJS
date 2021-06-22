                                          //    PROBLEM NUMBER # 7 - REVERSE INTEGER

// Solution 1
const reverse = x => {
    let val = parseInt(x.toString().split("").reverse().join(""));     
    return ((val > Math.pow(2, 31)) ? 0 : x < 0 ? (val * -1) : val);
};

// Solution 2
function reverse(x) {
    const isNegative = x < 0;
    x = Math.abs(x);
    let ret = 0;
    while (x > 0) {
      const num = x % 10;
      x = Math.floor(x / 10);
      ret *= 10;
      ret += num;
    }
    if (ret > Math.pow(2,31)) return 0;
    return isNegative ? ret * -1 : ret;
};
 
// Solution 3
function reverse(x) {    
  sign = Math.sign(x);
  x = Math.abs(x);
  x = x.toString();
  let reversed = '';
  for(let char of x) {
    reversed = char + reversed;
  }
  if(reversed > Math.pow(2,31)) return 0;
  return reversed * sign;
}


console.log(reverse(-153));
console.log(reverse(120));
console.log(reverse(1534236469));