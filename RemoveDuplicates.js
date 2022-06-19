var removeDuplicates = function(nums) {
    var len = nums.length;
    var last = NaN;
    var count = 0;
    for(let i = 0; i < len; i++) {
        if(nums[i] !== last) {
            nums[count] = nums[i];
            last = nums[i];
            count++;
        }
    }
    return count;
};

// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
