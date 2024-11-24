function subsetSum(nums, target) {
  const result = [];

  function backtrack(start, currentSubset, currentSum) {
    // Base case: if the current sum matches the target, store the subset
    if (currentSum === target) {
      result.push([...currentSubset]);
      return;
    }

    // If the current sum exceeds the target, stop further exploration
    if (currentSum > target) return;

    // Iterate through the array, allowing the reuse of the current element
    for (let i = start; i < nums.length; i++) {
      // Include the current element
      currentSubset.push(nums[i]);

      // Recur with the updated subset and sum, allowing reuse by keeping `i`
      backtrack(i, currentSubset, currentSum + nums[i]);

      // Backtrack: remove the last element
      currentSubset.pop();
    }
  }

  // Start the backtracking process
  backtrack(0, [], 0);
  return result;
}

// Example Usage
const nums = [2, 3, 6, 7];
const target = 7;

console.log("Subsets that sum to target:", subsetSum(nums, target));
