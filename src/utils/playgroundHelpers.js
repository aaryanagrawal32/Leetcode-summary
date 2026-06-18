export const generatePlaygroundCode = (tagId, config) => {
  if (tagId === 'array') {
    const { type, condition, sumType } = config;
    if (type === 'sliding_window') {
      return `${sumType} slidingWindow(vector<int>& nums, ${sumType} target) {
    int n = nums.size();
    int left = 0, maxLength = 0;
    ${sumType} windowState = 0; 
    
    for (int right = 0; right < n; ++right) {
        // Expand window
        windowState += nums[right];
        
        // Shrink window from left
        while (${condition}) {
            windowState -= nums[left];
            left++;
        }
        
        // Update maximum length
        maxLength = max(maxLength, right - left + 1);
    }
    return maxLength;
}`;
    } else {
      return `vector<int> twoPointersSearch(vector<int>& nums, int target) {
    sort(nums.begin(), nums.end());
    int left = 0, right = nums.size() - 1;
    
    while (left < right) {
        int currentSum = nums[left] + nums[right];
        if (currentSum == target) {
            return {left, right};
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    return {-1, -1};
}`;
    }
  }

  if (tagId === 'binary-search') {
    const { boundType } = config;
    if (boundType === 'lower') {
      return `int lowerBound(vector<int>& nums, int target) {
    int left = 0, right = nums.size();
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left; // First element >= target
}`;
    } else {
      return `int upperBound(vector<int>& nums, int target) {
    int left = 0, right = nums.size();
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] > target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left; // First element > target
}`;
    }
  }

  if (tagId === 'trees' || tagId === 'binary-tree') {
    const { returnType, nullReturn } = config;
    return `${returnType} traverse(TreeNode* root) {
    if (root == nullptr) return ${nullReturn};
    
    // Process current node
    // ...
    
    ${returnType === 'void' ? '' : returnType + ' leftVal = '}traverse(root->left);
    ${returnType === 'void' ? '' : returnType + ' rightVal = '}traverse(root->right);
    
    ${returnType === 'void' ? 'return;' : 'return leftVal + rightVal;'}
}`;
  }

  return `// Playground template not configured for tag: ${tagId}`;
};
