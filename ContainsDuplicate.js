// Contains Duplicate Algoritm
const containsDuplicate = (nums) => {
  nums.sort((a, b) => {
    return b - a;
  });
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) return true;
  }
  return false;
};

//Source Link:  https://leetcode.com/problems/contains-duplicate/
