export const PREDEFINED_PROBLEMS = {
  "array": [
    {
      problemId: 26,
      title: "Remove Duplicates from Sorted Array",
      titleSlug: "remove-duplicates-from-sorted-array",
      difficulty: "Easy",
      logic: "Use a slow pointer that only moves forward when a unique element is found, updating the array in-place. This achieves O(N) time and O(1) space complexity.",
      code: `int removeDuplicates(vector<int>& nums) {
    if (nums.empty()) return 0;
    int k = 1;
    for (int i = 1; i < nums.size(); i++) {
        if (nums[i] != nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}`
    },
    {
      problemId: 53,
      title: "Maximum Subarray",
      titleSlug: "maximum-subarray",
      difficulty: "Medium",
      logic: "Kadane's Algorithm: Maintain the maximum subarray sum ending at each position. If the running sum becomes negative, discard it and start fresh from the current element.",
      code: `int maxSubArray(vector<int>& nums) {
    int maxSum = nums[0];
    int currentSum = nums[0];
    for (int i = 1; i < nums.size(); i++) {
        currentSum = max(nums[i], currentSum + nums[i]);
        maxSum = max(maxSum, currentSum);
    }
    return maxSum;
}`
    },
    {
      problemId: 189,
      title: "Rotate Array",
      titleSlug: "rotate-array",
      difficulty: "Medium",
      logic: "Reverse three times: first reverse the entire array, then reverse the first k elements, and finally reverse the remaining elements. This achieves O(N) time and O(1) auxiliary space.",
      code: `void rotate(vector<int>& nums, int k) {
    int n = nums.size();
    k = k % n;
    reverse(nums.begin(), nums.end());
    reverse(nums.begin(), nums.begin() + k);
    reverse(nums.begin() + k, nums.end());
}`
    },
    {
      problemId: 56,
      title: "Merge Intervals",
      titleSlug: "merge-intervals",
      difficulty: "Medium",
      logic: "Sort the intervals by their start times. Iterate through them, merging overlapping intervals into the last interval added to the result.",
      code: `vector<vector<int>> merge(vector<vector<int>>& intervals) {
    if (intervals.empty()) return {};
    sort(intervals.begin(), intervals.end());
    vector<vector<int>> merged;
    merged.push_back(intervals[0]);
    for (int i = 1; i < intervals.size(); i++) {
        if (intervals[i][0] <= merged.back()[1]) {
            merged.back()[1] = max(merged.back()[1], intervals[i][1]);
        } else {
            merged.push_back(intervals[i]);
        }
    }
    return merged;
}`
    },
    {
      problemId: 48,
      title: "Rotate Image",
      titleSlug: "rotate-image",
      difficulty: "Medium",
      logic: "First, transpose the matrix (swap matrix[i][j] with matrix[j][i]). Second, reverse each row of the matrix.",
      code: `void rotate(vector<vector<int>>& matrix) {
    int n = matrix.size();
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            swap(matrix[i][j], matrix[j][i]);
        }
    }
    for (int i = 0; i < n; i++) {
        reverse(matrix[i].begin(), matrix[i].end());
    }
}`
    },
    {
      problemId: 121,
      title: "Best Time to Buy and Sell Stock",
      titleSlug: "best-time-to-buy-and-sell-stock",
      difficulty: "Easy",
      logic: "Keep track of the minimum buy price seen so far. At each step, calculate the potential profit if we sold today, and update the max profit.",
      code: `int maxProfit(vector<int>& prices) {
    int minPrice = INT_MAX;
    int maxProfit = 0;
    for (int price : prices) {
        minPrice = min(minPrice, price);
        maxProfit = max(maxProfit, price - minPrice);
    }
    return maxProfit;
}`
    },
    {
      problemId: 238,
      title: "Product of Array Except Self",
      titleSlug: "product-of-array-except-self",
      difficulty: "Medium",
      logic: "Compute prefix products in a first pass, then multiply by suffix products computed dynamically in a second pass, using only the output array for O(1) extra space.",
      code: `vector<int> productExceptSelf(vector<int>& nums) {
    int n = nums.size();
    vector<int> res(n, 1);
    for (int i = 1; i < n; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }
    int suffix = 1;
    for (int i = n - 1; i >= 0; i--) {
        res[i] *= suffix;
        suffix *= nums[i];
    }
    return res;
}`
    }
  ],
  "string": [
    {
      problemId: 14,
      title: "Longest Common Prefix",
      titleSlug: "longest-common-prefix",
      difficulty: "Easy",
      logic: "Sort the strings. The common prefix of the entire set will be the common prefix between the lexicographically first and last string.",
      code: `string longestCommonPrefix(vector<string>& strs) {
    if (strs.empty()) return "";
    sort(strs.begin(), strs.end());
    string first = strs[0], last = strs.back();
    int i = 0;
    while (i < first.size() && i < last.size() && first[i] == last[i]) {
        i++;
    }
    return first.substr(0, i);
}`
    },
    {
      problemId: 242,
      title: "Valid Anagram",
      titleSlug: "valid-anagram",
      difficulty: "Easy",
      logic: "Use a single frequency map of size 26 to increment counts for the first string and decrement counts for the second string.",
      code: `bool isAnagram(string s, string t) {
    if (s.length() != t.length()) return false;
    vector<int> counts(26, 0);
    for (int i = 0; i < s.length(); i++) {
        counts[s[i] - 'a']++;
        counts[t[i] - 'a']--;
    }
    for (int count : counts) {
        if (count != 0) return false;
    }
    return true;
}`
    },
    {
      problemId: 5,
      title: "Longest Palindromic Substring",
      titleSlug: "longest-palindromic-substring",
      difficulty: "Medium",
      logic: "Expand around centers: for each index, treat it as the center of an odd and even length palindrome, expanding outwards as long as characters match.",
      code: `string longestPalindrome(string s) {
    if (s.empty()) return "";
    int start = 0, maxLength = 1;
    auto expand = [&](int left, int right) {
        while (left >= 0 && right < s.length() && s[left] == s[right]) {
            int len = right - left + 1;
            if (len > maxLength) {
                maxLength = len;
                start = left;
            }
            left--;
            right++;
        }
    };
    for (int i = 0; i < s.length(); i++) {
        expand(i, i);
        expand(i, i + 1);
    }
    return s.substr(start, maxLength);
}`
    }
  ],
  "hash-table": [
    {
      problemId: 1,
      title: "Two Sum",
      titleSlug: "two-sum",
      difficulty: "Easy",
      logic: "Maintain a hash map of value to index. For each element, query the map for the complement (target - value).",
      code: `vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> seen;
    for (int i = 0; i < nums.size(); i++) {
        int comp = target - nums[i];
        if (seen.count(comp)) return {seen[comp], i};
        seen[nums[i]] = i;
    }
    return {};
}`
    },
    {
      problemId: 49,
      title: "Group Anagrams",
      titleSlug: "group-anagrams",
      difficulty: "Medium",
      logic: "Sort each string to use as a hash map key, grouping anagrams together in a vector of strings value.",
      code: `vector<vector<string>> groupAnagrams(vector<string>& strs) {
    unordered_map<string, vector<string>> groups;
    for (string& s : strs) {
        string key = s;
        sort(key.begin(), key.end());
        groups[key].push_back(s);
    }
    vector<vector<string>> res;
    for (auto& pair : groups) {
        res.push_back(pair.second);
    }
    return res;
}`
    }
  ],
  "two-pointers": [
    {
      problemId: 125,
      title: "Valid Palindrome",
      titleSlug: "valid-palindrome",
      difficulty: "Easy",
      logic: "Use two pointers starting at opposite ends. Skip non-alphanumeric characters and compare letters case-insensitively.",
      code: `bool isPalindrome(string s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        while (left < right && !isalnum(s[left])) left++;
        while (left < right && !isalnum(s[right])) right--;
        if (tolower(s[left]) != tolower(s[right])) return false;
        left++;
        right--;
    }
    return true;
}`
    },
    {
      problemId: 11,
      title: "Container With Most Water",
      titleSlug: "container-with-most-water",
      difficulty: "Medium",
      logic: "Initialize pointers at the boundaries. Calculate area, then move the pointer that points to the shorter line.",
      code: `int maxArea(vector<int>& height) {
    int maxW = 0, l = 0, r = height.size() - 1;
    while (l < r) {
        maxW = max(maxW, (r - l) * min(height[l], height[r]));
        if (height[l] < height[r]) l++;
        else r--;
    }
    return maxW;
}`
    }
  ],
  "trees": [
    {
      problemId: 104,
      title: "Maximum Depth of Binary Tree",
      titleSlug: "maximum-depth-of-binary-tree",
      difficulty: "Easy",
      logic: "Recursively calculate the maximum depth of the left and right subtrees. The maximum depth of the current node is 1 + max(leftDepth, rightDepth).",
      code: `int maxDepth(TreeNode* root) {
    if (!root) return 0;
    return 1 + max(maxDepth(root->left), maxDepth(root->right));
}`
    },
    {
      problemId: 226,
      title: "Invert Binary Tree",
      titleSlug: "invert-binary-tree",
      difficulty: "Easy",
      logic: "Recursively swap the left and right children for every node in the binary tree.",
      code: `TreeNode* invertTree(TreeNode* root) {
    if (!root) return nullptr;
    TreeNode* temp = root->left;
    root->left = invertTree(root->right);
    root->right = invertTree(temp);
    return root;
}`
    },
    {
      problemId: 102,
      title: "Binary Tree Level Order Traversal",
      titleSlug: "binary-tree-level-order-traversal",
      difficulty: "Medium",
      logic: "Use a queue to perform BFS, processing all nodes at the current level before moving to the next level.",
      code: `vector<vector<int>> levelOrder(TreeNode* root) {
    if (!root) return {};
    vector<vector<int>> res;
    queue<TreeNode*> q;
    q.push(root);
    while (!q.empty()) {
        int size = q.size();
        vector<int> level;
        for (int i = 0; i < size; i++) {
            TreeNode* curr = q.front();
            q.pop();
            level.push_back(curr->val);
            if (curr->left) q.push(curr->left);
            if (curr->right) q.push(curr->right);
        }
        res.push_back(level);
    }
    return res;
}`
    }
  ],
  "binary-tree": [
    {
      problemId: 100,
      title: "Same Tree",
      titleSlug: "same-tree",
      difficulty: "Easy",
      logic: "Two trees are identical if their roots are equal and their left and right subtrees are identical recursively.",
      code: `bool isSameTree(TreeNode* p, TreeNode* q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    return p->val == q->val && isSameTree(p->left, q->left) && isSameTree(p->right, q->right);
}`
    }
  ],
  "matrix": [
    {
      problemId: 73,
      title: "Set Matrix Zeroes",
      titleSlug: "set-matrix-zeroes",
      difficulty: "Medium",
      logic: "Use the first row and first column as marker state arrays, and track if the first row/column themselves need to be zeroed.",
      code: `void setZeroes(vector<vector<int>>& matrix) {
    int R = matrix.size(), C = matrix[0].size();
    bool firstRowZero = false, firstColZero = false;
    for (int r = 0; r < R; r++) if (matrix[r][0] == 0) firstColZero = true;
    for (int c = 0; c < C; c++) if (matrix[0][c] == 0) firstRowZero = true;
    for (int r = 1; r < R; r++) {
        for (int c = 1; c < C; c++) {
            if (matrix[r][c] == 0) {
                matrix[r][0] = 0;
                matrix[0][c] = 0;
            }
        }
    }
    for (int r = 1; r < R; r++) {
        for (int c = 1; c < C; c++) {
            if (matrix[r][0] == 0 || matrix[0][c] == 0) matrix[r][c] = 0;
        }
    }
    if (firstColZero) for (int r = 0; r < R; r++) matrix[r][0] = 0;
    if (firstRowZero) for (int c = 0; c < C; c++) matrix[0][c] = 0;
}`
    }
  ],
  "stack": [
    {
      problemId: 20,
      title: "Valid Parentheses",
      titleSlug: "valid-parentheses",
      difficulty: "Easy",
      logic: "Iterate through characters. Push opening brackets to a stack, and pop them when matching closing brackets are encountered.",
      code: `bool isValid(string s) {
    stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '{' || c == '[') st.push(c);
        else {
            if (st.empty()) return false;
            if (c == ')' && st.top() != '(') return false;
            if (c == '}' && st.top() != '{') return false;
            if (c == ']' && st.top() != '[') return false;
            st.pop();
        }
    }
    return st.empty();
}`
    }
  ],
  "heap-priority-queue": [
    {
      problemId: 215,
      title: "Kth Largest Element in an Array",
      titleSlug: "kth-largest-element-in-an-array",
      difficulty: "Medium",
      logic: "Maintain a min-heap of size K. When the heap size exceeds K, pop the smallest element. The top of the heap will contain the Kth largest element.",
      code: `int findKthLargest(vector<int>& nums, int k) {
    priority_queue<int, vector<int>, greater<int>> minHeap;
    for (int num : nums) {
        minHeap.push(num);
        if (minHeap.size() > k) minHeap.pop();
    }
    return minHeap.top();
}`
    }
  ]
};
