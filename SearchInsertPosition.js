var searchInsert = function(nums, target) {
  
    for(let i = 0; i < nums.length; i++){
        if(target <= nums[i]){
            return i;
        }
    }
      return nums.length;
    
};

// https://leetcode.com/problems/search-insert-position/