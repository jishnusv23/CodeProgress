class GraphTraverse {
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
      console.log(vertex+"->" + [...this.adlist[vertex]]);
    }
  }
  //Breadth First Search
  Bfs(startVertex){
    if (!this.adlist || !this.adlist[startVertex]) return;

    let visited={}
    let queue=[startVertex]
    visited[startVertex]=true
    while (queue.length>0) {
        let currentvertext=queue.shift()
        console.log(currentvertext)
        for(let neighbor of this.adlist[currentvertext]){
            if(!visited[neighbor]){
                visited[neighbor]=true
                queue.push(neighbor)
            }
        }
    }
  }
  //DepthFirstSearch
  Dfs(startVertex){
    let stack=[startVertex]
    let visited={}
    visited[startVertex]=true
    while (stack.length>0) {
        const currenNode=stack.pop()
        console.log(currenNode)
        for(let neighbor of this.adlist[currenNode]) {
            if(!visited[neighbor]){
                visited[neighbor]=true
                stack.push(neighbor)
            }
        }
    }
  }
}
const graph = new GraphTraverse();

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
graph.addEdges("B", "E");
graph.addEdges("C", "E");

// Display the graph
console.log("Graph Adjacency List:");
graph.Display();

// Perform BFS
console.log("\nBreadth-First Search starting from 'A':");
graph.Bfs("A");

// Perform DFS
console.log("\nDepth-First Search starting from 'A':");
graph.Dfs("A");
