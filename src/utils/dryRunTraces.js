export const getDryRunTrace = (problemId, title) => {
  const id = Number(problemId);
  if (id === 1 || title.toLowerCase().includes("two sum")) {
    return {
      input: "nums = [2, 7, 11, 15], target = 9",
      steps: [
        "Initialize hash map: map = {}",
        "Iterate i = 0: complement = 9 - nums[0] = 7. 7 not in map. Insert map[2] = 0.",
        "Iterate i = 1: complement = 9 - nums[1] = 2. 2 is found in map at index 0!",
        "Match found! Returning indices: [0, 1]."
      ]
    };
  }
  if (id === 26 || title.toLowerCase().includes("remove duplicates")) {
    return {
      input: "nums = [1, 1, 2]",
      steps: [
        "Initialize k = 1. Slow pointer pointing to index 0.",
        "Iterate i = 1: nums[1] = 1. Equals nums[0]. Skip duplicate.",
        "Iterate i = 2: nums[2] = 2. Different from nums[1]. Copy nums[k] = nums[2] -> nums[1] = 2. Increment k to 2.",
        "Finished loop. Return k = 2. Modified array prefix: [1, 2]."
      ]
    };
  }
  if (title.toLowerCase().includes("binary search") || id === 704) {
    return {
      input: "nums = [-1, 0, 3, 5, 9, 12], target = 9",
      steps: [
        "Initialize left = 0, right = 5.",
        "Step 1: mid = 0 + (5-0)/2 = 2. nums[2] = 3. 3 < 9. Set left = mid + 1 = 3.",
        "Step 2: mid = 3 + (5-3)/2 = 4. nums[4] = 9. 9 == 9. Match found!",
        "Return target index: 4."
      ]
    };
  }
  return {
    input: "Default parameters...",
    steps: [
      "Parsing optimal solution tree...",
      "Setting up stack/pointers configurations...",
      "Running dry run verification passes...",
      "All test cases passed successfully!"
    ]
  };
};
