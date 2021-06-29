                                    //      PROBLEM NUMBER 278 - FIRST BAD VERSION


// Solution # 1
 var solution = function(isBadVersion) {
    return function(n) {
        let start = 1, end = n;
        while(start<=end) {
            let mid = Math.floor(((start+end)/2));
            isBadVersion(mid) ? end = mid-1 : start = mid+1;
        }
        return start;
    };
};


console.log(solution(isBadVersion(5, 4)));