var containsDuplicate = function(nums) {
    nums.sort((a,b) => {return b-a})
    for(let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i-1] === nums[i]) return true
    }
    return false
};

// https://leetcode.com/problems/contains-duplicate/