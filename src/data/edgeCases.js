export const EDGE_CASES = {
  "array": [
    { title: "Empty / Single Element", desc: "Input array size is 0 or 1. Can lead to index out of bounds if checking nums[1] directly." },
    { title: "Integer Overflow", desc: "Subarray sums or product calculations exceed INT_MAX. Use long long for sum tracking." },
    { title: "All Negative Numbers", desc: "For Kadane's algorithm, initial max-sum should be INT_MIN or nums[0] rather than 0." },
    { title: "Duplicate Elements", desc: "In two-pointer searches or binary searches (e.g. LeetCode 81), duplicates can break uniqueness assumptions or O(log N) complexity." }
  ],
  "string": [
    { title: "Empty String / Single Char", desc: "Ensure your loops or pointers don't access outside bounds (e.g. index 0 on empty string)." },
    { title: "Spaces and Punctuation", desc: "In palindrome or word extraction problems, ignore non-alphanumeric characters, or handle spaces properly." },
    { title: "ASCII vs Unicode", desc: "Verify if character set is ASCII (128 or 256 size array is enough for frequency map) or Unicode." }
  ],
  "hash-table": [
    { title: "Modifying key during iteration", desc: "Never insert or delete keys from an unordered_map while iterating over it using a loop; it invalidates iterators." },
    { title: "Default Value Insertion", desc: "Accessing a non-existent key via map[key] automatically inserts the key with a default value (e.g., 0), growing the map memory." }
  ],
  "binary-search": [
    { title: "Mid Calculation Overflow", desc: "Using (l + r) / 2 causes integer overflow if l + r > INT_MAX. Use l + (r - l) / 2 instead." },
    { title: "Infinite Loop in Bounds Update", desc: "Using l = mid can cause infinite loops. Use l = mid + 1 or adjust mid calculation." }
  ],
  "trees": [
    { title: "Null Root", desc: "Input root is nullptr. Always check if (!root) return ...; first." },
    { title: "Skewed Trees (Linked List style)", desc: "A tree can be just a single line of nodes. Recursion depth can reach O(N) and cause stack overflow. Consider iterative traversal." }
  ],
  "binary-tree": [
    { title: "Null Root", desc: "Input root is nullptr. Always check if (!root) return ...; first." },
    { title: "Skewed Trees", desc: "Recursion depth can reach O(N) and cause stack overflow. Consider iterative traversal or balancing." }
  ]
};
