// BinarySearch Algoritm
const search = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      return i;
    }
  }
  return -1;
};


// Source Link: https://leetcode.com/problems/binary-search/