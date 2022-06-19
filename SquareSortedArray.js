var sortedSquares = function(nums) {
    let points = []
    for(let i = 0 ; i < nums.length; i++) {
        points.push(nums[i] * nums[i])
    }
    return points.sort(function(a, b){return a - b}); 
  };

//   LINK
// https://leetcode.com/problems/squares-of-a-sorted-array/