// Remove Duplicates Algorithm
const removeDuplicates = (nums) => {
  let len = nums.length;
  let last = NaN;
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] !== last) {
      nums[count] = nums[i];
      last = nums[i];
      count++;
    }
  }
  return count;
};

// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
