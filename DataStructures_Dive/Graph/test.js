//TOI GRAPH


class Graph {
  constructor() {
    this.addlist = [];
  }
  addVertex(vertex) {
    if (!this.addlist[vertex]) {
      this.addlist[vertex] = new Set();
    }
  }
  addEdges(vertex1, vertex2) {
    if (!this.addlist[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.addlist[vertex2]) {
      this.addVertex(vertex2);
    }
    this.addlist[vertex1].add(vertex2);
    this.addlist[vertex2].add(vertex1);
  }
  removeEdges(vertex1, vertex2) {
    this.addlist[vertex1].delete(vertex2);
    this.addlist[vertex2].delete(vertex1);
  }
  hasCycle(vertex, visited = new Set(), parent = null) {
    visited.add(vertex);
    for (const ele of this.addlist[vertex]) {
      if (!visited.has(ele)) {
        if (this.hasCycle(ele, visited, vertex)) {
          return true;
        }
      } else if (ele !== parent) {
        return true;
      }
    }
    return false;
  }
  countCycles() {
    let visited = new Set();
    let cycleCount = 0;

    for (const vertex in this.adjList) {
      if (!visited.has(vertex)) {
        // Call the DFS helper to detect cycles
        if (this.hasCycle(vertex, visited, null)) {
          cycleCount++;
        }
      }
    }
    return cycleCount;
  }
  DFS(startVertex) {
    let stack = [startVertex];
    let visited = {};
    visited[startVertex] = true;
    while (stack.length) {
      let currentVetext = stack.pop();
      console.log(currentVetext);
      for (let neighbor of this.addlist[currentVetext]) {
        if (!visited[neighbor]) {
          stack.push(neighbor);
          visited[neighbor] = true;
        }
      }
    }
  }
  BFS(startVertex) {
    let queue = [startVertex];
    let visited = {};
    visited[startVertex] = true;
    while (queue.length > 0) {
      const currentvertex = queue.shift();
      console.log(currentvertex);
      for (let neighbor of this.addlist[currentvertex]) {
        if (!visited[neighbor]) {
          queue.push(neighbor);
          visited[neighbor] = true;
        }
      }
    }
  }
  removeVertex(vertex) {
    for (let addvertex of this.addlist[vertex]) {
      this.removeEdges(addvertex, vertex);
    }
    delete this.addlist[vertex];
  }
  Display() {
    for (const vertex in this.addlist) {
      console.log(vertex + "=>" + [...this.addlist[vertex]]);
    }
  }
}
const graph=new Graph()

graph.addEdges("A", "B");
graph.addEdges("B", "C");
graph.addEdges("C", "D");
graph.addEdges("D", "E");
graph.addEdges("E", "B"); 
// graph.removeVertex("B");
graph.BFS('A')
console.log('======================')
graph.DFS("A")
// graph.Display();
console.log(graph.hasCycle("A"))
