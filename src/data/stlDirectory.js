// Static data for the Interactive C++ STL Container Reference Finder
export const STL_CONTAINER_DIRECTORY = {
  "vector": {
    name: "std::vector",
    header: "#include <vector>",
    desc: "Dynamic contiguous array that manages its capacity automatically. Highly efficient for cache locality and push_back operations.",
    docUrl: "https://cplusplus.com/reference/vector/vector/",
    timeComplexity: "Access: O(1) | End Push/Pop: O(1) amortized | Mid Insert/Erase: O(N)",
    spaceComplexity: "O(N) contiguous memory",
    methods: [
      { name: "push_back(val)", syntax: "vec.push_back(10);", desc: "Appends element to the end of the vector.", complexity: "O(1) amortized" },
      { name: "emplace_back(...args)", syntax: "vec.emplace_back(1, \"test\");", desc: "Constructs element in-place at the end, avoiding copies.", complexity: "O(1) amortized" },
      { name: "pop_back()", syntax: "vec.pop_back();", desc: "Removes the last element.", complexity: "O(1)" },
      { name: "size()", syntax: "size_t n = vec.size();", desc: "Returns the number of elements in the vector.", complexity: "O(1)" },
      { name: "resize(n, val)", syntax: "vec.resize(10, 0);", desc: "Resizes container to contain n elements.", complexity: "O(N)" },
      { name: "reserve(n)", syntax: "vec.reserve(100);", desc: "Requests capacity increase to at least n.", complexity: "O(N)" },
      { name: "insert(pos, val)", syntax: "vec.insert(vec.begin() + 1, 5);", desc: "Inserts element at iterator position.", complexity: "O(N)" },
      { name: "erase(pos)", syntax: "vec.erase(vec.begin() + 2);", desc: "Removes element(s) at iterator position.", complexity: "O(N)" },
      { name: "clear()", syntax: "vec.clear();", desc: "Removes all elements.", complexity: "O(N)" }
    ]
  },
  "unordered_map": {
    name: "std::unordered_map",
    header: "#include <unordered_map>",
    desc: "Hash-table based key-value container. Provides fast average constant time lookups and insertions. Keys are unordered.",
    docUrl: "https://cplusplus.com/reference/unordered_map/unordered_map/",
    timeComplexity: "Search/Insert/Delete: O(1) average, O(N) worst-case",
    spaceComplexity: "O(N) hash-bucket allocation",
    methods: [
      { name: "operator[key]", syntax: "map[key] = val;", desc: "Accesses or inserts key-value pair.", complexity: "O(1) avg, O(N) worst" },
      { name: "insert({key, val})", syntax: "map.insert({key, val});", desc: "Inserts key-value pair if key doesn't exist.", complexity: "O(1) avg, O(N) worst" },
      { name: "find(key)", syntax: "auto it = map.find(key);\nif (it != map.end()) { /* found */ }", desc: "Finds element by key; returns iterator.", complexity: "O(1) avg" },
      { name: "count(key)", syntax: "if (map.count(key)) { /* exists */ }", desc: "Checks existence (returns 1 if found, 0 otherwise).", complexity: "O(1) avg" },
      { name: "erase(key)", syntax: "map.erase(key);", desc: "Removes element(s) by key.", complexity: "O(1) avg, O(N) worst" },
      { name: "size()", syntax: "size_t n = map.size();", desc: "Returns number of elements.", complexity: "O(1)" },
      { name: "clear()", syntax: "map.clear();", desc: "Clears all key-value mappings.", complexity: "O(N)" }
    ]
  },
  "unordered_set": {
    name: "std::unordered_set",
    header: "#include <unordered_set>",
    desc: "Hash-table based set. Stores unique values in an unordered bucket layout. Fast constant-time membership checking.",
    docUrl: "https://cplusplus.com/reference/unordered_set/unordered_set/",
    timeComplexity: "Search/Insert/Delete: O(1) average, O(N) worst-case",
    spaceComplexity: "O(N) hash-bucket allocation",
    methods: [
      { name: "insert(val)", syntax: "set.insert(10);", desc: "Inserts unique value.", complexity: "O(1) avg, O(N) worst" },
      { name: "count(val)", syntax: "if (set.count(10)) { /* exists */ }", desc: "Checks if value exists (returns 1 if found, 0 otherwise).", complexity: "O(1) avg" },
      { name: "find(val)", syntax: "auto it = set.find(10);", desc: "Finds element; returns iterator.", complexity: "O(1) avg" },
      { name: "erase(val)", syntax: "set.erase(10);", desc: "Removes element by value.", complexity: "O(1) avg, O(N) worst" },
      { name: "size()", syntax: "size_t n = set.size();", desc: "Returns number of unique elements.", complexity: "O(1)" },
      { name: "clear()", syntax: "set.clear();", desc: "Removes all elements.", complexity: "O(N)" }
    ]
  },
  "priority_queue": {
    name: "std::priority_queue",
    header: "#include <queue>",
    desc: "Heap-based container adapter. Restricts access to the top element (max-heap by default). Essential for greedy algorithms and Dijkstra.",
    docUrl: "https://cplusplus.com/reference/queue/priority_queue/",
    timeComplexity: "Access Top: O(1) | Push/Pop: O(log N) | Build Heap: O(N)",
    spaceComplexity: "O(N) underlying array space",
    methods: [
      { name: "push(val)", syntax: "pq.push(10);", desc: "Inserts element and bubbles up to maintain heap property.", complexity: "O(log N)" },
      { name: "emplace(args...)", syntax: "pq.emplace(10);", desc: "Constructs element in-place to avoid copy/move overhead.", complexity: "O(log N)" },
      { name: "pop()", syntax: "pq.pop();", desc: "Removes top element and bubbles down to maintain heap property.", complexity: "O(log N)" },
      { name: "top()", syntax: "int topVal = pq.top();", desc: "Accesses top/priority element (largest for max-heap).", complexity: "O(1)" },
      { name: "empty()", syntax: "if (pq.empty()) { /* is empty */ }", desc: "Checks if heap contains 0 elements.", complexity: "O(1)" },
      { name: "size()", syntax: "size_t n = pq.size();", desc: "Returns size.", complexity: "O(1)" }
    ]
  },
  "stack": {
    name: "std::stack",
    header: "#include <stack>",
    desc: "LIFO (Last In, First Out) container adapter. Typically built on top of std::deque.",
    docUrl: "https://cplusplus.com/reference/stack/stack/",
    timeComplexity: "Push/Pop/Top: O(1) constant time",
    spaceComplexity: "O(N) stack capacity",
    methods: [
      { name: "push(val)", syntax: "s.push(10);", desc: "Pushes element onto the top.", complexity: "O(1)" },
      { name: "pop()", syntax: "s.pop();", desc: "Removes the top element.", complexity: "O(1)" },
      { name: "top()", syntax: "int topVal = s.top();", desc: "Returns reference to top element.", complexity: "O(1)" },
      { name: "empty()", syntax: "if (s.empty()) { /* is empty */ }", desc: "Checks if stack is empty.", complexity: "O(1)" },
      { name: "size()", syntax: "size_t n = s.size();", desc: "Returns size.", complexity: "O(1)" }
    ]
  },
  "queue": {
    name: "std::queue",
    header: "#include <queue>",
    desc: "FIFO (First In, First Out) container adapter. Typically built on top of std::deque. Core container for Breadth-First Search (BFS).",
    docUrl: "https://cplusplus.com/reference/queue/queue/",
    timeComplexity: "Push/Pop/Front/Back: O(1) constant time",
    spaceComplexity: "O(N) queue capacity",
    methods: [
      { name: "push(val)", syntax: "q.push(10);", desc: "Inserts element at the back.", complexity: "O(1)" },
      { name: "pop()", syntax: "q.pop();", desc: "Removes the front element.", complexity: "O(1)" },
      { name: "front()", syntax: "int frontVal = q.front();", desc: "Accesses front element.", complexity: "O(1)" },
      { name: "back()", syntax: "int backVal = q.back();", desc: "Accesses back element.", complexity: "O(1)" },
      { name: "empty()", syntax: "if (q.empty()) { /* is empty */ }", desc: "Checks if queue is empty.", complexity: "O(1)" },
      { name: "size()", syntax: "size_t n = q.size();", desc: "Returns size.", complexity: "O(1)" }
    ]
  },
  "deque": {
    name: "std::deque",
    header: "#include <deque>",
    desc: "Double-ended queue. Supports fast O(1) insertion/deletion at both front and back. Managed chunked memory layout.",
    docUrl: "https://cplusplus.com/reference/deque/deque/",
    timeComplexity: "Access: O(1) | Front/Back Insert/Delete: O(1) | Mid Operations: O(N)",
    spaceComplexity: "O(N) non-contiguous chunks",
    methods: [
      { name: "push_back(val)", syntax: "dq.push_back(10);", desc: "Appends element at the end.", complexity: "O(1)" },
      { name: "push_front(val)", syntax: "dq.push_front(5);", desc: "Prepends element to the beginning.", complexity: "O(1)" },
      { name: "pop_back()", syntax: "dq.pop_back();", desc: "Removes last element.", complexity: "O(1)" },
      { name: "pop_front()", syntax: "dq.pop_front();", desc: "Removes first element.", complexity: "O(1)" },
      { name: "front()", syntax: "int f = dq.front();", desc: "Accesses first element.", complexity: "O(1)" },
      { name: "back()", syntax: "int b = dq.back();", desc: "Accesses last element.", complexity: "O(1)" },
      { name: "size()", syntax: "size_t n = dq.size();", desc: "Returns size.", complexity: "O(1)" }
    ]
  },
  "map": {
    name: "std::map",
    header: "#include <map>",
    desc: "Sorted associative key-value container. Implemented as a Red-Black Tree. Maintains keys in sorted order.",
    docUrl: "https://cplusplus.com/reference/map/map/",
    timeComplexity: "Search/Insert/Delete: O(log N) | Iteration: O(N)",
    spaceComplexity: "O(N) node pointer allocations",
    methods: [
      { name: "operator[key]", syntax: "map[key] = val;", desc: "Accesses or inserts key-value pair.", complexity: "O(log N)" },
      { name: "insert({key, val})", syntax: "map.insert({key, val});", desc: "Inserts pair if key isn't already present.", complexity: "O(log N)" },
      { name: "find(key)", syntax: "auto it = map.find(key);\nif (it != map.end()) { /* found */ }", desc: "Finds element by key.", complexity: "O(log N)" },
      { name: "erase(key)", syntax: "map.erase(key);", desc: "Removes element by key.", complexity: "O(log N)" },
      { name: "lower_bound(key)", syntax: "auto it = map.lower_bound(key);", desc: "Returns iterator to first element >= key.", complexity: "O(log N)" },
      { name: "upper_bound(key)", syntax: "auto it = map.upper_bound(key);", desc: "Returns iterator to first element > key.", complexity: "O(log N)" },
      { name: "size()", syntax: "size_t n = map.size();", desc: "Returns size.", complexity: "O(1)" }
    ]
  },
  "set": {
    name: "std::set",
    header: "#include <set>",
    desc: "Sorted set storing unique keys. Implemented as a Red-Black Tree. Keeps elements sorted.",
    docUrl: "https://cplusplus.com/reference/set/set/",
    timeComplexity: "Search/Insert/Delete: O(log N) | Iteration: O(N)",
    spaceComplexity: "O(N) node pointer allocations",
    methods: [
      { name: "insert(val)", syntax: "set.insert(10);", desc: "Inserts unique value.", complexity: "O(log N)" },
      { name: "erase(val)", syntax: "set.erase(10);", desc: "Removes value.", complexity: "O(log N)" },
      { name: "find(val)", syntax: "auto it = set.find(10);", desc: "Searches for value iterator.", complexity: "O(log N)" },
      { name: "lower_bound(val)", syntax: "auto it = set.lower_bound(10);", desc: "Returns iterator to first element >= val.", complexity: "O(log N)" },
      { name: "upper_bound(val)", syntax: "auto it = set.upper_bound(10);", desc: "Returns iterator to first element > val.", complexity: "O(log N)" },
      { name: "size()", syntax: "size_t n = set.size();", desc: "Returns size.", complexity: "O(1)" }
    ]
  },
  "string": {
    name: "std::string",
    header: "#include <string>",
    desc: "Char sequence container. Similar to a vector but specifically tailored for string operations, concatenation, and search.",
    docUrl: "https://cplusplus.com/reference/string/string/",
    timeComplexity: "Access: O(1) | Append: O(1) amortized | Search/Substr: O(N)",
    spaceComplexity: "O(N) contiguous character buffer",
    methods: [
      { name: "push_back(ch)", syntax: "str.push_back('a');", desc: "Appends character to end.", complexity: "O(1) amortized" },
      { name: "append(s)", syntax: "str.append(\" suffix\");", desc: "Appends string.", complexity: "O(s.size())" },
      { name: "substr(pos, len)", syntax: "string sub = str.substr(0, 5);", desc: "Generates substring.", complexity: "O(len)" },
      { name: "find(sub)", syntax: "size_t pos = str.find(\"target\");\nif (pos != string::npos) { /* found */ }", desc: "Finds first occurrence of substring.", complexity: "O(N * M) worst" },
      { name: "size() / length()", syntax: "size_t len = str.length();", desc: "Returns string length.", complexity: "O(1)" },
      { name: "replace(pos, len, s)", syntax: "str.replace(0, 5, \"hello\");", desc: "Replaces substring range with another.", complexity: "O(N)" },
      { name: "c_str()", syntax: "const char* c = str.c_str();", desc: "Returns standard const char* pointer.", complexity: "O(1)" }
    ]
  }
};
