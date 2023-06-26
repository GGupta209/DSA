function moveZeroes(nums) {
  let i = 0; // Pointer to keep track of non-zero elements
  
  // Iterate through the array
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      // Swap non-zero element with the element at index i
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }
  
  // Set remaining elements from index i to the end as zero
  for (let k = i; k < nums.length; k++) {
    nums[k] = 0;
  }
  
  return nums;
}
