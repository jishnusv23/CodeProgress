class Graph {
  constructor() {
    this.adlist = [];
  }
  addVertex(vertex) {
    if (!this.adlist[vertex]) {
      this.adlist[vertex] = new Set();
    }
  }
  adEdge(vertex1, vertex2) {
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
      console.log(vertex + "->" + [...this.adlist[vertex]]);
    }
  }
}
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.adEdge("A", "B");
graph.adEdge("B", "C");
graph.Display();