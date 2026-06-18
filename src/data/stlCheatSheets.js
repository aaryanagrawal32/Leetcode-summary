export const STL_CHEAT_SHEETS = {
  "array": {
    container: "std::vector",
    syntax: "std::vector<int> vec;",
    methods: [
      { name: "push_back(val)", desc: "Appends element to end", complexity: "O(1) amortized" },
      { name: "pop_back()", desc: "Removes last element", complexity: "O(1)" },
      { name: "size()", desc: "Returns size", complexity: "O(1)" },
      { name: "resize(n, val)", desc: "Resizes vector", complexity: "O(N)" },
      { name: "reserve(n)", desc: "Reserves capacity", complexity: "O(N)" },
      { name: "insert(pos, val)", desc: "Inserts element at pos", complexity: "O(N)" }
    ],
    note: "Use reserve() to avoid reallocations when size is known. Prefer emplace_back() over push_back() to construct in-place.",
    docUrl: "https://cplusplus.com/reference/vector/vector/"
  },
  "string": {
    container: "std::string",
    syntax: "std::string str = \"hello\";",
    methods: [
      { name: "push_back(ch)", desc: "Appends char", complexity: "O(1)" },
      { name: "substr(pos, len)", desc: "Returns substring", complexity: "O(len)" },
      { name: "find(str)", desc: "Finds first occurrence of sub", complexity: "O(N * M)" },
      { name: "append(str)", desc: "Appends string", complexity: "O(M)" },
      { name: "length()", desc: "Returns size", complexity: "O(1)" }
    ],
    note: "Pass by const reference (const string&) to functions to avoid expensive copies. Use std::string_view for read-only parameters (C++17).",
    docUrl: "https://cplusplus.com/reference/string/string/"
  },
  "hash-table": {
    container: "std::unordered_map / std::unordered_set",
    syntax: "std::unordered_map<key_type, val_type> map;\nstd::unordered_set<val_type> set;",
    methods: [
      { name: "insert({k, v}) / insert(val)", desc: "Inserts element", complexity: "O(1) avg / O(N) worst" },
      { name: "erase(key)", desc: "Removes element", complexity: "O(1) avg" },
      { name: "count(key)", desc: "Checks existence (0 or 1)", complexity: "O(1) avg" },
      { name: "find(key)", desc: "Returns iterator to element", complexity: "O(1) avg" },
      { name: "operator[key]", desc: "Accesses or inserts key", complexity: "O(1) avg" }
    ],
    note: "Unordered containers use hash tables. For ordered keys, use std::map or std::set (Red-Black trees, O(log N) operations).",
    docUrl: "https://cplusplus.com/reference/unordered_map/unordered_map/"
  },
  "heap-priority-queue": {
    container: "std::priority_queue",
    syntax: "std::priority_queue<int> maxHeap; // Max-heap\nstd::priority_queue<int, vector<int>, greater<int>> minHeap; // Min-heap",
    methods: [
      { name: "push(val)", desc: "Inserts element", complexity: "O(log N)" },
      { name: "pop()", desc: "Removes top element", complexity: "O(log N)" },
      { name: "top()", desc: "Accesses top element", complexity: "O(1)" },
      { name: "empty()", desc: "Checks if empty", complexity: "O(1)" },
      { name: "size()", desc: "Returns size", complexity: "O(1)" }
    ],
    note: "Heapifying a vector: use priority_queue<T> pq(vec.begin(), vec.end()) which takes O(N) time instead of inserting elements one by one (O(N log N)).",
    docUrl: "https://cplusplus.com/reference/queue/priority_queue/"
  },
  "stack": {
    container: "std::stack",
    syntax: "std::stack<int> s;",
    methods: [
      { name: "push(val)", desc: "Pushes element on top", complexity: "O(1)" },
      { name: "pop()", desc: "Pops top element", complexity: "O(1)" },
      { name: "top()", desc: "Accesses top element", complexity: "O(1)" },
      { name: "empty()", desc: "Checks if empty", complexity: "O(1)" }
    ],
    note: "An adapter container, default underlying container is std::deque. Useful for monotonic stack patterns or depth-first searches.",
    docUrl: "https://cplusplus.com/reference/stack/stack/"
  },
  "queue": {
    container: "std::queue / std::deque",
    syntax: "std::queue<int> q;\nstd::deque<int> dq; // Double-ended queue",
    methods: [
      { name: "push(val) / push_back(val)", desc: "Inserts at back", complexity: "O(1)" },
      { name: "pop() / pop_front()", desc: "Removes from front", complexity: "O(1)" },
      { name: "front()", desc: "Accesses front element", complexity: "O(1)" },
      { name: "back()", desc: "Accesses back element", complexity: "O(1)" }
    ],
    note: "Standard queue only allows front pop and back push. Deque allows push/pop from both ends. Used in Breadth-First Search (BFS).",
    docUrl: "https://cplusplus.com/reference/queue/queue/"
  },
  "trees": {
    container: "TreeNode* (Custom struct) / std::map",
    syntax: "struct TreeNode {\n    int val;\n    TreeNode *left, *right;\n};",
    methods: [
      { name: "left", desc: "Pointer to left child", complexity: "O(1)" },
      { name: "right", desc: "Pointer to right child", complexity: "O(1)" },
      { name: "val", desc: "Node data value", complexity: "O(1)" }
    ],
    note: "Always check for nullptr before accessing left or right children to avoid segmentation faults: if (!node) return.",
    docUrl: "https://cplusplus.com/reference/map/map/"
  },
  "binary-tree": {
    container: "TreeNode* (Custom struct)",
    syntax: "struct TreeNode {\n    int val;\n    TreeNode *left, *right;\n};",
    methods: [
      { name: "left", desc: "Pointer to left child", complexity: "O(1)" },
      { name: "right", desc: "Pointer to right child", complexity: "O(1)" },
      { name: "val", desc: "Node data value", complexity: "O(1)" }
    ],
    note: "Common traversals: Inorder (L-Root-R), Preorder (Root-L-R), Postorder (L-R-Root), Level-order (BFS queue).",
    docUrl: "https://cplusplus.com/reference/stl/"
  },
  "graph": {
    container: "std::vector<std::vector<int>> / std::unordered_map<int, std::vector<int>>",
    syntax: "vector<vector<int>> adj(n); // Adjacency list\nunordered_map<int, vector<int>> adjMap;",
    methods: [
      { name: "adj[u].push_back(v)", desc: "Adds directed edge u -> v", complexity: "O(1)" },
      { name: "adj[u]", desc: "Retrieves neighbors of u", complexity: "O(1)" }
    ],
    note: "For dense graphs, adjacency matrix vector<vector<bool>> adj(n, vector<bool>(n, false)) allows O(1) edge lookups but uses O(N^2) space.",
    docUrl: "https://cplusplus.com/reference/vector/vector/"
  }
};
