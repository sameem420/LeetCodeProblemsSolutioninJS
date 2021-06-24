                                    //      PROBLEM NUMBER # 58 - LENGTH OF LAST WORD


// Solution # 1
var lengthOfLastWord = function(s) {
    return s.trim().split(" ").pop().length;
};

// Solution # 2
var lengthOfLastWord = function(s) {
    s = s.trim().split(" ");
    return s[s.length - 1].length;
};

// Solution # 3
var lengthOfLastWord = function(s) {
    let m = s.trim().match(/(\w)+$/);
    return m ? m[0].length : 0;
};

// Solution # 4
var lengthOfLastWord = function(s) {
    let count = 0
    for (let i = s.length - 1; i >= 0; --i) {
        if(s[i] !== ' ')
            ++count;
        if(s[i] === ' ' && count)
            break;
    }
    return count;
};
  

console.log(lengthOfLastWord("Hello World"));

console.log(lengthOfLastWord(" "));