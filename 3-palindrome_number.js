// var isPalindrome = function(x) {
//     if(x < 0) return false;
//     let val = parseInt(x / 10);
//     console.log(val);
//     let a = x % 10;
//     x = parseInt(x / 10);
//     let b = x % 10;
//     c = parseInt(x / 10);
//     if(a === c) return true;
//     else return false;
// };

// var isPalindrome = function(x) {
//     return x === Number(x.toString().split('').reverse().join(""));
// };

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

console.log(isPalindrome(121));

console.log(isPalindrome(120));

console.log(isPalindrome(0));

console.log(isPalindrome(1));