var isValid = function(s) {
    const hashMap = {"(": ")","{": "}","[": "]"};
    const stack = []
    for(let ch of s) {
        if(hashMap[ch]) {
            stack.push(hashMap[ch])
        }else if (stack.length > 0 && stack[stack.length-1] === ch) {
            stack.pop()
        } else {
            return false
        }
    }
       return stack.length === 0
   };


//    https://leetcode.com/problems/valid-parentheses/