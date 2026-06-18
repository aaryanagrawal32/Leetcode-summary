export const mockTagsData = [
  {
    tagId: "array",
    tagName: "Array",
    totalLeetcodeQuestions: 1563,
    userSolvedCount: 120,
    identificationRules: [
      "Requires contiguous storage or sequential processing.",
      "Involves subsegment optimization (subarray, subsequence).",
      "Inputs are ordered or can be sorted to optimize lookup times.",
      "Look for keywords like 'subarray', 'sliding window', 'two sum', or 'in-place'."
    ],
    complexityBenchmarks: {
      time: "O(N) for linear scans or O(N log N) with sorting",
      space: "O(1) auxiliary space (in-place operations) or O(N) for hash mapping",
      note: "Standard array operations should avoid O(N²) nested loops where possible by utilizing sorting, two pointers, or maps."
    },
    generalTemplates: [
      {
        name: "Sliding Window (Variable Size)",
        description: "Standard template to find the longest or shortest subarray satisfying a condition.",
        code: `int slidingWindow(vector<int>& nums) {
    int n = nums.size();
    int left = 0, maxLength = 0;
    // Track window state (e.g., sum, hash map of frequencies)
    int windowState = 0; 
    
    for (int right = 0; right < n; ++right) {
        // Expand window: Add nums[right] to state
        windowState += nums[right];
        
        // Shrink window from the left until condition is valid again
        while (/* condition violated, e.g., windowState > target */) {
            windowState -= nums[left];
            left++;
        }
        
        // Update maximum valid window length
        maxLength = max(maxLength, right - left + 1);
    }
    return maxLength;
}`
      },
      {
        name: "Two Pointers (Opposite Ends)",
        description: "Search space reduction using left and right pointers meeting in the middle.",
        code: `vector<int> twoPointersSearch(vector<int>& nums, int target) {
    // Requires sorted input
    sort(nums.begin(), nums.end());
    int left = 0;
    int right = nums.size() - 1;
    
    while (left < right) {
        int currentSum = nums[left] + nums[right];
        if (currentSum == target) {
            return {left, right};
        } else if (currentSum < target) {
            left++; // Need a larger sum
        } else {
            right--; // Need a smaller sum
        }
    }
    return {-1, -1};
}`
      }
    ],
    mySolutions: [
      {
        problemId: 1,
        title: "Two Sum",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/two-sum/",
        logic: "Use a hash map to record indices of visited numbers. For each element, look up its complement (target - current). Since hash map lookups are O(1) on average, this reduces the time complexity from O(N²) to O(N).",
        code: `vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> numMap;
    for (int i = 0; i < nums.size(); ++i) {
        int complement = target - nums[i];
        if (numMap.count(complement)) {
            return {numMap[complement], i};
        }
        numMap[nums[i]] = i;
    }
    return {};
}`
      },
      {
        problemId: 11,
        title: "Container With Most Water",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/container-with-most-water/",
        logic: "Position pointers at the start and end of the array. The height is constrained by the shorter line. Compute the current area and record the maximum. Shift the pointer pointing to the shorter line inward because moving the longer line cannot increase the container's height.",
        code: `int maxArea(vector<int>& height) {
    int maxWater = 0;
    int left = 0;
    int right = height.size() - 1;
    
    while (left < right) {
        int width = right - left;
        int currentHeight = min(height[left], height[right]);
        maxWater = max(maxWater, width * currentHeight);
        
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxWater;
}`
      },
      {
        problemId: 15,
        title: "3Sum",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/3sum/",
        logic: "Sort the array first. Iterate through the array, fixing the first element. Use the two-pointer approach to find the other two elements whose sum matches the negative value of the fixed element. Skip duplicates for all three pointers to ensure unique triplets.",
        code: `vector<vector<int>> threeSum(vector<int>& nums) {
    vector<vector<int>> result;
    sort(nums.begin(), nums.end());
    int n = nums.size();
    
    for (int i = 0; i < n - 2; ++i) {
        // Skip duplicate solutions for the first element
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        
        int left = i + 1;
        int right = n - 1;
        int target = -nums[i];
        
        while (left < right) {
            int currentSum = nums[left] + nums[right];
            if (currentSum == target) {
                result.push_back({nums[i], font[left], nums[right]});
                // Skip duplicate values for second & third elements
                while (left < right && nums[left] == nums[left + 1]) left++;
                while (left < right && nums[right] == nums[right - 1]) right--;
                left++;
                right--;
            } else if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}`
      }
    ]
  },
  {
    tagId: "string",
    tagName: "String",
    totalLeetcodeQuestions: 785,
    userSolvedCount: 65,
    identificationRules: [
      "Input is a stream of characters or string.",
      "Involves substring search, string parsing, or anagram detection.",
      "Look for string properties like palindromes, prefixes, suffixes, or character frequency distribution."
    ],
    complexityBenchmarks: {
      time: "O(N) for linear matching / frequency calculation, or O(N * L) for trie-based prefix searching",
      space: "O(1) auxiliary (if alphabet size is constant, like 26 lowercase English letters), or O(N) to store states",
      note: "Avoid building substrings via repeated concatenation in loops as it yields O(N²) time complexity in many environments; use index slices or standard modifications."
    },
    generalTemplates: [
      {
        name: "Frequency Mapping (26 Lowercase)",
        description: "Static array representation of character counts for extreme efficiency.",
        code: `vector<int> countFrequencies(string& s) {
    vector<int> freq(26, 0);
    for (char c : s) {
        if (c >= 'a' && c <= 'z') {
            freq[c - 'a']++;
        }
    }
    return freq;
}`
      }
    ],
    mySolutions: [
      {
        problemId: 3,
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        logic: "Maintain a sliding window starting at index 'left' and ending at 'right'. Store the last seen index of each character in a map. When a repeating character is encountered in the window, shift the left pointer to the right of the previous occurrence to maintain uniqueness.",
        code: `int lengthOfLongestSubstring(string s) {
    vector<int> lastIndex(256, -1);
    int maxLength = 0;
    int left = 0;
    
    for (int right = 0; right < s.length(); ++right) {
        // If character was seen inside our current window, contract left
        if (lastIndex[s[right]] >= left) {
            left = lastIndex[s[right]] + 1;
        }
        lastIndex[s[right]] = right;
        maxLength = max(maxLength, right - left + 1);
    }
    return maxLength;
}`
      },
      {
        problemId: 20,
        title: "Valid Parentheses",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/valid-parentheses/",
        logic: "Iterate through the string. Push opening brackets onto a stack. When a closing bracket is found, ensure the stack is not empty and the top of the stack matches the corresponding opening bracket type, then pop it. The stack must be empty at the end.",
        code: `bool isValid(string s) {
    stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '{' || c == '[') {
            st.push(c);
        } else {
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
    ]
  },
  {
    tagId: "hash-table",
    tagName: "Hash Table",
    totalLeetcodeQuestions: 692,
    userSolvedCount: 88,
    identificationRules: [
      "Requires O(1) lookups, insertions, or updates.",
      "Counting occurrence frequencies or indexing elements for fast query checks.",
      "Comparing sets or subsets (duplicates detection, intersection)."
    ],
    complexityBenchmarks: {
      time: "O(1) average time complexity for operations, O(N) worst-case under hash collisions",
      space: "O(N) space complexity to store keys and values",
      note: "Use custom hash functions or unordered_map in C++ for O(1) operations. Use std::map (Red-Black Tree) if ordered traversal of keys is required (O(log N) operations)."
    },
    generalTemplates: [
      {
        name: "Standard Hash Map Setup",
        description: "Counting element frequencies and key-value tracking.",
        code: `void countElements(vector<int>& nums) {
    unordered_map<int, int> counts;
    for (int num : nums) {
        counts[num]++;
    }
    // Iterate through map
    for (auto& [key, value] : counts) {
        // key is the number, value is its frequency
    }
}`
      }
    ],
    mySolutions: [
      {
        problemId: 49,
        title: "Group Anagrams",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/group-anagrams/",
        logic: "Iterate through strings. Sort each string to create a sorted signature. Use this signature as a key in a hash map mapping to a vector of original strings. Grouping is done in O(N * L log L) where L is the maximum string length.",
        code: `vector<vector<string>> groupAnagrams(vector<string>& strs) {
    unordered_map<string, vector<string>> anagramGroups;
    for (string& s : strs) {
        string signature = s;
        sort(signature.begin(), signature.end());
        anagramGroups[signature].push_back(s);
    }
    
    vector<vector<string>> result;
    for (auto& [key, group] : anagramGroups) {
        result.push_back(group);
    }
    return result;
}`
      },
      {
        problemId: 347,
        title: "Top K Frequent Elements",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/top-k-frequent-elements/",
        logic: "Use a hash map to count occurrences. Then, use a min-heap (priority queue) of size K to track the most frequent items. Inserting elements into the heap takes O(N log K), which is more efficient than sorting the counts (O(N log N)).",
        code: `vector<int> topKFrequent(vector<int>& nums, int k) {
    unordered_map<int, int> counts;
    for (int num : nums) counts[num]++;
    
    // Min-heap storing pair<frequency, value>
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> minHeap;
    
    for (auto& [val, freq] : counts) {
        minHeap.push({freq, val});
        if (minHeap.size() > k) {
            minHeap.pop();
        }
    }
    
    vector<int> result;
    while (!minHeap.empty()) {
        result.push_back(minHeap.top().second);
        minHeap.pop();
    }
    return result;
}`
      }
    ]
  },
  {
    tagId: "dynamic-programming",
    tagName: "Dynamic Programming",
    totalLeetcodeQuestions: 512,
    userSolvedCount: 34,
    identificationRules: [
      "Problem requires finding an optimal value (min, max) or counting unique combinations.",
      "The problem can be broken down into overlapping subproblems.",
      "Optimal solutions to subproblems form the optimal solution to the main problem (optimal substructure)."
    ],
    complexityBenchmarks: {
      time: "O(N * M) or O(N) depending on states and transition steps",
      space: "O(N * M) for memoization grid, often optimization reduces it to O(M) or O(1)",
      note: "Top-down memoization is recursion + cache. Bottom-up iteration populates tables. Bottom-up usually has better space/constant factors because of no recursive call overhead."
    },
    generalTemplates: [
      {
        name: "1D Bottom-Up Dynamic Programming",
        description: "State transition where dp[i] depends on prior calculations.",
        code: `int bottomUpDP(int n) {
    if (n <= 1) return n;
    vector<int> dp(n + 1, 0);
    // Base cases
    dp[0] = 0;
    dp[1] = 1;
    
    for (int i = 2; i <= n; ++i) {
        // Transition equation
        dp[i] = dp[i - 1] + dp[i - 2]; 
    }
    return dp[n];
}`
      },
      {
        name: "0/1 Knapsack Framework",
        description: "Traditional bottom-up table matching item index and remaining weight capacity.",
        code: `int knapsack(vector<int>& weights, vector<int>& values, int W) {
    int n = weights.size();
    // dp[i][w] stores maximum value using first i items and capacity w
    vector<vector<int>> dp(n + 1, vector<int>(W + 1, 0));
    
    for (int i = 1; i <= n; ++i) {
        for (int w = 1; w <= W; ++w) {
            if (weights[i - 1] <= w) {
                dp[i][w] = max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    return dp[n][W];
}`
      }
    ],
    mySolutions: [
      {
        problemId: 70,
        title: "Climbing Stairs",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/climbing-stairs/",
        logic: "To reach step N, you can either come from step N-1 (with a 1-step leap) or step N-2 (with a 2-step leap). The transition formula is dp[i] = dp[i-1] + dp[i-2], which mirrors the Fibonacci sequence. Optimize space complexity to O(1) by maintaining only the last two values.",
        code: `int climbStairs(int n) {
    if (n <= 2) return n;
    int prev2 = 1; // dp[1]
    int prev1 = 2; // dp[2]
    int current = 0;
    
    for (int i = 3; i <= n; ++i) {
        current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    return current;
}`
      },
      {
        problemId: 322,
        title: "Coin Change",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/coin-change/",
        logic: "Let dp[i] represent the minimum coins required to make amount i. For each coin, dynamic programming transition is dp[i] = min(dp[i], dp[i - coin] + 1) if i - coin >= 0. Initialize the dp array with a sentinel value (amount + 1).",
        code: `int coinChange(vector<int>& coins, int amount) {
    vector<int> dp(amount + 1, amount + 1);
    dp[0] = 0;
    
    for (int i = 1; i <= amount; ++i) {
        for (int coin : coins) {
            if (i - coin >= 0) {
                dp[i] = min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}`
      },
      {
        problemId: 300,
        title: "Longest Increasing Subsequence",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/longest-increasing-subsequence/",
        logic: "Standard DP approach uses dp[i] as the LIS ending at index i. Time complexity is O(N²). An optimized approach uses binary search (std::lower_bound) to construct a active subset representing the smallest tail element of increasing subsequences, yielding O(N log N) time.",
        code: `int lengthOfLIS(vector<int>& nums) {
    if (nums.empty()) return 0;
    vector<int> tails;
    
    for (int num : nums) {
        auto it = lower_bound(tails.begin(), tails.end(), num);
        if (it == tails.end()) {
            tails.push_back(num);
        } else {
            *it = num;
        }
    }
    return tails.size();
}`
      }
    ]
  },
  {
    tagId: "two-pointers",
    tagName: "Two Pointers",
    totalLeetcodeQuestions: 180,
    userSolvedCount: 45,
    identificationRules: [
      "Input is an array, list, or string.",
      "Searching for elements meeting criteria in linear structure.",
      "Avoids nested O(N²) scans by maintaining dual pointers changing positions monotonically."
    ],
    complexityBenchmarks: {
      time: "O(N) for pointer shifts, or O(N log N) if pre-sorting is required",
      space: "O(1) auxiliary space as only references to indices are recorded",
      note: "Pointers can be opposite ends moving towards each other, fast-and-slow, or moving in parallel across two distinct arrays."
    },
    generalTemplates: [
      {
        name: "Fast & Slow Pointers",
        description: "Moving pointers at different speeds (e.g. 1 step vs 2 steps) to detect cycles or find midpoints.",
        code: `bool hasCycle(ListNode *head) {
    if (!head || !head->next) return false;
    ListNode *slow = head;
    ListNode *fast = head;
    
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            return true; // Cycle detected
        }
    }
    return false; // No cycle
}`
      }
    ],
    mySolutions: [
      {
        problemId: 125,
        title: "Valid Palindrome",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/valid-palindrome/",
        logic: "Initialize pointers at the beginning and the end. Shift them inward, skipping non-alphanumeric characters. Compare lowercase characters at each stage. Return false on any mismatch.",
        code: `bool isPalindrome(string s) {
    int left = 0;
    int right = s.length() - 1;
    
    while (left < right) {
        while (left < right && !isalnum(s[left])) left++;
        while (left < right && !isalnum(s[right])) right--;
        
        if (tolower(s[left]) != tolower(s[right])) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}`
      },
      {
        problemId: 167,
        title: "Two Sum II - Input Array Is Sorted",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
        logic: "Since the array is sorted, standard opposite end two pointers work. If the current sum is less than target, increment left pointer. If it is greater, decrement right pointer. Since indices are 1-based, return indices incremented by 1.",
        code: `vector<int> twoSum(vector<int>& numbers, int target) {
    int left = 0;
    int right = numbers.size() - 1;
    
    while (left < right) {
        int sum = numbers[left] + numbers[right];
        if (sum == target) {
            return {left + 1, right + 1};
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return {};
}`
      }
    ]
  },
  {
    tagId: "trees",
    tagName: "Trees",
    totalLeetcodeQuestions: 412,
    userSolvedCount: 28,
    identificationRules: [
      "Data represents hierarchical structures, family lines, or parent-child associations.",
      "Requires traversals: inorder, preorder, postorder, or level-order.",
      "Properties such as path sums, tree height, balancing, or node ancestors."
    ],
    complexityBenchmarks: {
      time: "O(N) to visit every node once",
      space: "O(H) recursion stack space, where H is the height of the tree. Best case O(log N) for balanced trees, worst case O(N) for skewed trees",
      note: "Recursive Depth First Search (DFS) uses the call stack. Breadth First Search (BFS) uses a queue (std::queue) for level-by-level traversal."
    },
    generalTemplates: [
      {
        name: "DFS Recursive Postorder",
        description: "Collects values from children and bubbles up properties to the parent.",
        code: `int traverseTree(TreeNode* root) {
    if (root == nullptr) return 0;
    
    int leftVal = traverseTree(root->left);
    int rightVal = traverseTree(root->right);
    
    // Bubble up logic
    return max(leftVal, rightVal) + 1;
}`
      },
      {
        name: "BFS Level Order Traversal",
        description: "Iterative traversal using a FIFO queue to visit nodes level by level.",
        code: `vector<vector<int>> levelOrder(TreeNode* root) {
    if (!root) return {};
    vector<vector<int>> result;
    queue<TreeNode*> q;
    q.push(root);
    
    while (!q.empty()) {
        int levelSize = q.size();
        vector<int> currentLevel;
        
        for (int i = 0; i < levelSize; ++i) {
            TreeNode* node = q.front();
            q.pop();
            currentLevel.push_back(node->val);
            
            if (node->left) q.push(node->left);
            if (node->right) q.push(node->right);
        }
        result.push_back(currentLevel);
    }
    return result;
}`
      }
    ],
    mySolutions: [
      {
        problemId: 104,
        title: "Maximum Depth of Binary Tree",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        logic: "The depth of a binary tree is 1 plus the maximum depth of its left and right subtrees. Base case: If the root is null, return 0.",
        code: `int maxDepth(TreeNode* root) {
    if (root == nullptr) return 0;
    return max(maxDepth(root->left), maxDepth(root->right)) + 1;
}`
      },
      {
        problemId: 236,
        title: "Lowest Common Ancestor of a Binary Tree",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
        logic: "Recursively traverse the tree. If the current node is null, or matches p or q, return the current node. Otherwise, search left and right subtrees. If both recursive searches return non-null values, then current node is the LCA. If only one is non-null, propagate that one upward.",
        code: `TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    if (!root || root == p || root == q) return root;
    
    TreeNode* left = lowestCommonAncestor(root->left, p, q);
    TreeNode* right = lowestCommonAncestor(root->right, p, q);
    
    if (left && right) return root; // p and q found in different subtrees
    return left ? left : right; // return non-null lookup
}`
      }
    ]
  },
  {
    tagId: "math",
    tagName: "Math",
    totalLeetcodeQuestions: 490,
    userSolvedCount: 22,
    identificationRules: ["Involves arithmetic equations, modular operations, prime numbers, or numeric sequences."],
    complexityBenchmarks: { time: "O(log N) for binary calculations or O(sqrt(N)) for factorization", space: "O(1) auxiliary", note: "Look out for overflows; use long long in C++." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "sorting",
    tagName: "Sorting",
    totalLeetcodeQuestions: 360,
    userSolvedCount: 15,
    identificationRules: ["Requires ordering elements to optimize search space or gather identical keys together."],
    complexityBenchmarks: { time: "O(N log N) standard sort, or O(N) bucket sort", space: "O(1) in-place or O(N) auxiliary", note: "std::sort uses IntroSort (hybrid of QuickSort, HeapSort, and InsertionSort)." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "greedy",
    tagName: "Greedy",
    totalLeetcodeQuestions: 340,
    userSolvedCount: 12,
    identificationRules: ["Making locally optimal choices leads to a globally optimal solution."],
    complexityBenchmarks: { time: "O(N log N) due to pre-sorting or heap operations", space: "O(1) or O(N)", note: "Must mathematically prove greedy choice property holds." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "depth-first-search",
    tagName: "Depth-First Search",
    totalLeetcodeQuestions: 320,
    userSolvedCount: 25,
    identificationRules: ["Requires exploring paths fully before backtracking (tree/graph traversals)."],
    complexityBenchmarks: { time: "O(V + E) for graphs or O(N) for trees", space: "O(H) recursion stack height", note: "Uses the system call stack recursively." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "binary-search",
    tagName: "Binary Search",
    totalLeetcodeQuestions: 280,
    userSolvedCount: 18,
    identificationRules: ["Monotonic search spaces (sorted array, range of integers) where you discard half the options."],
    complexityBenchmarks: { time: "O(log N)", space: "O(1)", note: "Ensure you don't overflow middle calculation: low + (high - low)/2." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "database",
    tagName: "Database",
    category: "Database",
    totalLeetcodeQuestions: 250,
    userSolvedCount: 5,
    identificationRules: ["SQL schemas, table queries, relational joins, window aggregations."],
    complexityBenchmarks: { time: "Schema/index-dependent lookups", space: "Index overhead", note: "Optimize indexes and table scan paths." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "breadth-first-search",
    tagName: "Breadth-First Search",
    totalLeetcodeQuestions: 240,
    userSolvedCount: 14,
    identificationRules: ["Requires finding the shortest path in unweighted graphs or level-order structures."],
    complexityBenchmarks: { time: "O(V + E) vertices and edges scanned", space: "O(V) to store nodes in queue", note: "Uses a FIFO queue." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "matrix",
    tagName: "Matrix",
    totalLeetcodeQuestions: 210,
    userSolvedCount: 10,
    identificationRules: ["2D grid exploration, coordinate systems, cell states, boundary detection."],
    complexityBenchmarks: { time: "O(N * M) cell visits", space: "O(1) auxiliary or O(N * M) visited grid", note: "Often utilizes directional arrays like dx = {-1, 0, 1, 0} and dy = {0, 1, 0, -1}." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "binary-tree",
    tagName: "Binary Tree",
    totalLeetcodeQuestions: 170,
    userSolvedCount: 16,
    identificationRules: ["Hierarchical tree structure where nodes have at most two children."],
    complexityBenchmarks: { time: "O(N)", space: "O(H)", note: "Recursive operations bubble values up to the root." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "bit-manipulation",
    tagName: "Bit Manipulation",
    totalLeetcodeQuestions: 160,
    userSolvedCount: 8,
    identificationRules: ["Requires optimizing binary state operations (AND, OR, XOR, shifts)."],
    complexityBenchmarks: { time: "O(1) standard CPU bit operations", space: "O(1)", note: "Extremely fast constant factor overhead." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "heap-priority-queue",
    tagName: "Heap (Priority Queue)",
    totalLeetcodeQuestions: 150,
    userSolvedCount: 9,
    identificationRules: ["Requires constant time retrieval of the minimum or maximum element in a dynamic set."],
    complexityBenchmarks: { time: "O(1) lookup, O(log N) insertion/deletion", space: "O(N)", note: "Implemented in C++ using std::priority_queue." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "stack",
    tagName: "Stack",
    totalLeetcodeQuestions: 140,
    userSolvedCount: 11,
    identificationRules: ["Requires LIFO (Last-In-First-Out) state recovery or backtracking."],
    complexityBenchmarks: { time: "O(1) push/pop/top", space: "O(N)", note: "Used in expression parsers and monotonic structures." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "graph",
    tagName: "Graph",
    totalLeetcodeQuestions: 130,
    userSolvedCount: 7,
    identificationRules: ["Nodes/Vertices connected by edges (paths, cycle detection, flow)."],
    complexityBenchmarks: { time: "O(V + E) traversal", space: "O(V) adjacency representation", note: "Represented using adjacency lists (vector<vector<int>>)." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "prefix-sum",
    tagName: "Prefix Sum",
    totalLeetcodeQuestions: 125,
    userSolvedCount: 9,
    identificationRules: ["Requires fast static range queries on sums or frequencies."],
    complexityBenchmarks: { time: "O(N) precomputation, O(1) query", space: "O(N) prefix array size", note: "Stores cumulative sums: prefix[i] = prefix[i-1] + arr[i]." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "sliding-window",
    tagName: "Sliding Window",
    totalLeetcodeQuestions: 110,
    userSolvedCount: 12,
    identificationRules: ["Involves processing contiguous subarray boundaries dynamically."],
    complexityBenchmarks: { time: "O(N) linear iteration", space: "O(1) or O(K) where K is unique size", note: "Pointers move monotonically forward." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "backtracking",
    tagName: "Backtracking",
    totalLeetcodeQuestions: 100,
    userSolvedCount: 6,
    identificationRules: ["Exploring all combinations, permutations, or paths (N-Queens, Sudoku)."],
    complexityBenchmarks: { time: "O(2^N) or O(N!) highly exponential", space: "O(N) depth search recursion stack", note: "Prune branches early to optimize execution." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "union-find",
    tagName: "Union Find",
    totalLeetcodeQuestions: 95,
    userSolvedCount: 4,
    identificationRules: ["Disjoint sets, dynamic connectivity, cycle detection in undirected graphs."],
    complexityBenchmarks: { time: "O(alpha(N)) almost constant time per operation with path compression", space: "O(N)", note: "Also known as Disjoint Set Union (DSU)." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "monotonic-stack",
    tagName: "Monotonic Stack",
    totalLeetcodeQuestions: 80,
    userSolvedCount: 3,
    identificationRules: ["Finding the next greater or smaller element in an array."],
    complexityBenchmarks: { time: "O(N) linear time", space: "O(N) stack capacity", note: "Keeps elements ordered in either strictly increasing or decreasing order." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "trie",
    tagName: "Trie",
    totalLeetcodeQuestions: 70,
    userSolvedCount: 2,
    identificationRules: ["Prefix searching, autocomplete systems, dictionary structures."],
    complexityBenchmarks: { time: "O(L) where L is string word length", space: "O(AlphabetSize * N * L)", note: "Each node represents a character mapping." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "binary-search-tree",
    tagName: "Binary Search Tree",
    totalLeetcodeQuestions: 65,
    userSolvedCount: 5,
    identificationRules: ["Trees where left child < parent < right child."],
    complexityBenchmarks: { time: "O(H) search/insert where H is height", space: "O(H)", note: "Inorder traversal visits keys in sorted order." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "divide-and-conquer",
    tagName: "Divide and Conquer",
    totalLeetcodeQuestions: 60,
    userSolvedCount: 3,
    identificationRules: ["Splitting problems into subproblems recursively (MergeSort, QuickSort)."],
    complexityBenchmarks: { time: "O(N log N)", space: "O(log N)", note: "Combines solutions dynamically." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "recursion",
    tagName: "Recursion",
    totalLeetcodeQuestions: 55,
    userSolvedCount: 6,
    identificationRules: ["Functions calling themselves to solve smaller problem instances."],
    complexityBenchmarks: { time: "State-dependent", space: "O(Depth) recursion stack frame", note: "Must define clear base cases to prevent stack overflow." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "queue",
    tagName: "Queue",
    totalLeetcodeQuestions: 50,
    userSolvedCount: 4,
    identificationRules: ["First-In-First-Out (FIFO) structures, buffers, task scheduling."],
    complexityBenchmarks: { time: "O(1) enqueue/dequeue", space: "O(N)", note: "Used as foundations in BFS traversals." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "topological-sort",
    tagName: "Topological Sort",
    totalLeetcodeQuestions: 45,
    userSolvedCount: 2,
    identificationRules: ["Dependency resolution, course schedules, DAG sorting."],
    complexityBenchmarks: { time: "O(V + E) vertices and edges", space: "O(V) arrays", note: "Can be solved using Kahn's BFS algorithm or DFS traversal." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "memoization",
    tagName: "Memoization",
    totalLeetcodeQuestions: 40,
    userSolvedCount: 5,
    identificationRules: ["Caching results of expensive recursive functions (top-down DP)."],
    complexityBenchmarks: { time: "State-transition count", space: "Cache size O(States)", note: "Prunes identical overlapping branches." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "ordered-set",
    tagName: "Ordered Set",
    totalLeetcodeQuestions: 38,
    userSolvedCount: 1,
    identificationRules: ["Sorted collections supporting index range queries or order traversals."],
    complexityBenchmarks: { time: "O(log N) inserts/lookups", space: "O(N)", note: "std::set is typically implemented as a Red-Black Tree in C++." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "geometry",
    tagName: "Geometry",
    totalLeetcodeQuestions: 35,
    userSolvedCount: 0,
    identificationRules: ["Points, lines, planes, convex hulls, intersection calculations."],
    complexityBenchmarks: { time: "Formula-dependent", space: "O(1)", note: "Be precise with double/float values." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "game-theory",
    tagName: "Game Theory",
    totalLeetcodeQuestions: 30,
    userSolvedCount: 0,
    identificationRules: ["Minimax states, nim-games, winning/losing strategies."],
    complexityBenchmarks: { time: "State-dependent", space: "O(States) DP states", note: "Assumes both players play optimally." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "segment-tree",
    tagName: "Segment Tree",
    totalLeetcodeQuestions: 28,
    userSolvedCount: 1,
    identificationRules: ["Range query updates on arrays (sum, minimum, maximum) in logarithmic time."],
    complexityBenchmarks: { time: "O(log N) query and update", space: "O(4N) size array", note: "Supports dynamic array indices values updates." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "doubly-linked-list",
    tagName: "Doubly-Linked List",
    totalLeetcodeQuestions: 25,
    userSolvedCount: 2,
    identificationRules: ["Nodes with both forward and backward pointer links (LRU Cache, LFUCache)."],
    complexityBenchmarks: { time: "O(1) insertion and deletion at pointers", space: "O(N)", note: "Helps design quick cache evictions." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "rolling-hash",
    tagName: "Rolling Hash",
    totalLeetcodeQuestions: 22,
    userSolvedCount: 0,
    identificationRules: ["Substring searches matching a rolling numeric hash code value (Rabin-Karp)."],
    complexityBenchmarks: { time: "O(N + M) average search", space: "O(1)", note: "Requires modular mathematics to prevent integer overflow." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "interactive",
    tagName: "Interactive",
    totalLeetcodeQuestions: 20,
    userSolvedCount: 1,
    identificationRules: ["API/system constraints, binary search over secret functions."],
    complexityBenchmarks: { time: "Strict query limits", space: "O(1)", note: "Minimize total API calls." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "string-matching",
    tagName: "String Matching",
    totalLeetcodeQuestions: 18,
    userSolvedCount: 1,
    identificationRules: ["Substring verification (KMP, Z-algorithm, Rabin-Karp)."],
    complexityBenchmarks: { time: "O(N + M) linear scan", space: "O(M) size array", note: "Matches patterns against text efficiently." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "shell",
    tagName: "Shell",
    category: "Shell",
    totalLeetcodeQuestions: 15,
    userSolvedCount: 0,
    identificationRules: ["Linux scripting, awk, sed, text parsing in terminal."],
    complexityBenchmarks: { time: "N/A", space: "N/A", note: "Uses command pipelines." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "monotonic-queue",
    tagName: "Monotonic Queue",
    totalLeetcodeQuestions: 12,
    userSolvedCount: 0,
    identificationRules: ["Sliding window maximum or minimum updates."],
    complexityBenchmarks: { time: "O(N) amortized linear", space: "O(W) window width", note: "Maintains elements sorted within the active window." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "line-sweep",
    tagName: "Line Sweep",
    totalLeetcodeQuestions: 10,
    userSolvedCount: 1,
    identificationRules: ["Interval intersections, coordinates events sorted along an axis."],
    complexityBenchmarks: { time: "O(N log N) sorting events", space: "O(N)", note: "Commonly used in rectangle coordinate overlaps." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "combinatorics",
    tagName: "Combinatorics",
    totalLeetcodeQuestions: 9,
    userSolvedCount: 0,
    identificationRules: ["Permutations, combinations, binomial coefficients (nCr)."],
    complexityBenchmarks: { time: "O(N) factorial calculation", space: "O(1)", note: "Often requires computing modulo 10^9 + 7." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "number-theory",
    tagName: "Number Theory",
    totalLeetcodeQuestions: 8,
    userSolvedCount: 0,
    identificationRules: ["GCD, LCM, Prime Sieve of Eratosthenes, Extended Euclidean Algorithm."],
    complexityBenchmarks: { time: "O(log(min(A,B))) for GCD", space: "O(1)", note: "GCD algorithm is logarithmic." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "shortest-path",
    tagName: "Shortest Path",
    totalLeetcodeQuestions: 7,
    userSolvedCount: 0,
    identificationRules: ["Dijkstra, Bellman-Ford, Floyd-Warshall shortest distances in weighted graphs."],
    complexityBenchmarks: { time: "O(E log V) Dijkstra", space: "O(V)", note: "Dijkstra requires non-negative edge weights." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "minimum-spanning-tree",
    tagName: "Minimum Spanning Tree",
    totalLeetcodeQuestions: 6,
    userSolvedCount: 0,
    identificationRules: ["Connecting all vertices with minimum total edge weight (Kruskal, Prim)."],
    complexityBenchmarks: { time: "O(E log E) due to Kruskal sorting", space: "O(V) for DSU disjoint structures", note: "Kruskal uses DSU for cycle prevention." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "euler-circuit",
    tagName: "Euler Circuit",
    totalLeetcodeQuestions: 5,
    userSolvedCount: 0,
    identificationRules: ["Visiting every graph edge exactly once (Hierholzer's algorithm)."],
    complexityBenchmarks: { time: "O(V + E)", space: "O(V + E)", note: "All vertices must have even degrees (or two odd degrees for path)." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "strongly-connected-component",
    tagName: "Strongly Connected Component",
    totalLeetcodeQuestions: 4,
    userSolvedCount: 0,
    identificationRules: ["Subgraphs where every vertex is reachable from every other vertex (Tarjan, Kosaraju)."],
    complexityBenchmarks: { time: "O(V + E)", space: "O(V)", note: "Finds cycles and connection blocks in directed graphs." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "bipartite",
    tagName: "Bipartite",
    totalLeetcodeQuestions: 3,
    userSolvedCount: 0,
    identificationRules: ["Graph coloring with 2 colors such that no adjacent nodes share colors."],
    complexityBenchmarks: { time: "O(V + E)", space: "O(V)", note: "Can be solved using BFS or DFS traversal coloring." },
    generalTemplates: [],
    mySolutions: []
  },
  {
    tagId: "concurrency",
    tagName: "Concurrency",
    category: "Concurrency",
    totalLeetcodeQuestions: 9,
    userSolvedCount: 0,
    identificationRules: ["Requires thread synchronization, mutexes, semaphores, or asynchronous execution."],
    complexityBenchmarks: { time: "Thread-scheduling dependent", space: "O(1) auxiliary", note: "Avoid deadlocks and race conditions." },
    generalTemplates: [],
    mySolutions: []
  }
];
