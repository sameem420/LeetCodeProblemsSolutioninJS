                                    //  PROBLEM NUMBER # 1528 - SHUFFLE STRING

// Solution # 1
var restoreString = function(s, indices) {
    const result = [];
    for(let i = 0; i < s.length; i++) {
        result[indices[i]] = s[i]
    }
    return result.join('');
};

// Solution # 2
var restoreString = function(s, indices) {
    const result = []
    for(let i=0; i<s.length; i++) {
        const letter = s[i]
        const index = indices[i]
        result[index] = letter
    }
    
    return result.join('')
};

// Solution # 3
var restoreString = function(s, indices) {
    let keys = {};
    indices.forEach((val, index) => keys[val] = s[index])
    
    return Object.values(keys).join('');
};


console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]));