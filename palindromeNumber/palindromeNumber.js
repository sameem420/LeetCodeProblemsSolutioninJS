                                //    PROBLEM NUMBER # 9 - PALINDROME NUMBER

// Solution # 1
var isPalindrome = function(x) {
    if(x < 0) return false;
    let val = parseInt(x / 10);
    console.log(val);
    let a = x % 10;
    x = parseInt(x / 10);
    let b = x % 10;
    c = parseInt(x / 10);
    if(a === c) return true;
    else return false;
};

// Solution # 2
var isPalindrome = function(x) {
    return x === Number(x.toString().split('').reverse().join(""));
};

// Solution # 3
var isPalindrome = function(x) {
    if(x < 0) return false;
    let reverse = 0;
    let original = x;
    while(x !== 0) {
        reverse *= 10;
        reverse += x % 10;
        x = parseInt(x/10);
    }
    if(original === reverse) return true;
    else return false;
};

// Solution # 4
const isPalindrome = (x) => {
    if(x < 0) return false;
    x = x.toString();
  let reversed = '';
  for(let char of x) {
    reversed = char + reversed;
  }
  return Number(reversed) === Number(x);
}

console.log(isPalindrome(121));

console.log(isPalindrome(120));

console.log(isPalindrome(0));

console.log(isPalindrome(1));