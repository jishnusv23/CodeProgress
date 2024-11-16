# Heap DataStructure

- A Min-Heap is a complete binary tree in which the value in each internal node is smaller than or equal to the values in the children of that node. Mapping the elements of a heap into an array is trivial: if a node is stored an index k, then its left child is stored at index 2k + 1 and its right child at index 2k + 2.

## find the nods

- Arr[(i-1)/2] return the parent node
- Arr[(2-i)+1] return the left node
- Arr[(2-i)+2] return the right node

## Max Heap:
- Parent nodes are always greater than or equal to their children
- The root node contains the maximum element
- Example: If parent is 15, its children must be less than 15 (like 10 and 8)
## Min Heap:
- Parent nodes are always less than or equal to their children
- The root node contains the minimum element
- Example: If parent is 5, its children must be greater than 5 (like 8 and 10)

## Key Properties of Heap:
- Complete Binary Tree: All levels are filled except possibly the last level
- Shape Property: Tree is filled from left to right
- Heap Property: Follows either max-heap or min-heap rule

## Real-world Applications:
- Priority Queues
- Heap Sort Algorithm
- Memory Management in Operating Systems
- Graph Algorithms (like Dijkstra's shortest path)
- Job Scheduling in Operating Systems