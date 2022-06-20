// Plus One Algoritm
const plusOne = (digits) => {
    for (let i = digits.length; i >=0; i--) {
        if(digits[i] < 9) {
            digits[i] = digits[i] + 1
            return digits
        }else {
            digits[i] = 0
        }
    }
    digits.unshift(1)
    return digits
}

//Source Link:  https://leetcode.com/problems/plus-one/