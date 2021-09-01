                                    //  PROBLEM NUMBER # 1295 - FIND NUMBERS WITH EVEN NUMBER OF DIGITS


// Solution # 1
 var findNumbers = function(nums) {
    let count_even = 0;
    for(let num of nums) {
        if(Number(num.toString().length) % 2 == 0)
            count_even++;
    }
    return count_even;
};


console.log(findNumbers([12,345,2,6,7896]))
console.log(findNumbers([6,7,2],8));