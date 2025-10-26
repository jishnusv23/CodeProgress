class Graph {
  constructor() {
    this.adlist = [];
  }
  addVertex(vertex) {
    if (!this.adlist[vertex]) {
      this.adlist[vertex] = new Set();
    }
  }
  addEdges(vertex1, vertex2) {
    if (!this.adlist[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adlist[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adlist[vertex1].add(vertex2);
    this.adlist[vertex2].add(vertex1);
  }
  Display() {
    for (let vertex in this.adlist) {
      console.log(vertex + "=>" + [...this.adlist[vertex]]);
    }
  }
  removeEdges(vertex1, vertex2) {
    this.adlist[vertex1].delete(vertex2);
    this.adlist[vertex2].delete(vertex1);
  }
  removeVertex(vertex) {
    if (!this.adlist[vertex]) return null;
    for (let addvertex of this.adlist[vertex]) {
      this.removeEdges(addvertex, vertex);
    }
    delete this.adlist[vertex];
  }
  BSF(startvertex) {
    let queue = [startvertex];
    let visited = new Set();
    visited.add(startvertex);
    while (queue.length) {
      const currentvertex = queue.shift();
      console.log(currentvertex);
      for (let neighbor of this.adlist[currentvertex]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.add(neighbor);
        }
      }
    }
  }
  DFS(startvertex) {
    let stack = [startvertex];
    let visited = new Set();
    while (stack.length > 0) {
      const currentvertex = stack.pop();
      if (!visited.has(currentvertex)) {
        console.log(currentvertex);
        visited.add(currentvertex);
        for (let neighbor of this.adlist[currentvertex]) {
          stack.push(neighbor);
        }
      }
    }
  }

  DFSTraver(startVertex) {
    let visited=new Set()
    let stack=[]
    const helper=(vertex)=>{
      if(!this.adlist[vertex]) return null
      stack.push(vertex)
      visited.add(vertex)
      for(let neighbor of this.adlist[vertex]){
        if(!visited.has(neighbor)){
          helper(neighbor)
        }
      }
    }
    helper(startVertex)
    return stack
  }
  hasCycle(vertex,visited=new Set(),parent=null){
    visited.add(vertex)
    for(let elevertex of this.adlist[vertex]){
      if(!visited.has(elevertex)){
        if(this.hasCycle(elevertex,visited,vertex)){
          return true
        }
      }else if(parent!=null){
        return true
      }
    }
    return false
  }
}
// Create a new Graph instance
const graph = new Graph();

// Add vertices
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

// Add edges
graph.addEdges("A", "B");
graph.addEdges("A", "C");
graph.addEdges("B", "D");
graph.addEdges("C", "E");

// Display the adjacency list
console.log("Graph structure:");
graph.Display();

// Perform BFS
console.log("\nBreadth-First Search starting from A:");
graph.BSF("A");

// Perform DFS
console.log("\nDepth-First Search starting from A:");
graph.DFS("A");
console.log('---------------------------------------')
console.log(graph.DFSTraver("A"))
