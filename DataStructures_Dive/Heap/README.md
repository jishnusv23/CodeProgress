# Heap DataStructure

- A Min-Heap is a complete binary tree in which the value in each internal node is smaller than or equal to the values in the children of that node. Mapping the elements of a heap into an array is trivial: if a node is stored an index k, then its left child is stored at index 2k + 1 and its right child at index 2k + 2.

## find the nods

- Arr[(i-1)/2] return the parent node
- Arr[(2-i)+1] return the left node
- Arr[(2-i)+2] return the right node
