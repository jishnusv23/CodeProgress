class Graph {
  constructor() {
    this.adList = [];
  }
  addVertex(vertex) {
    if (!this.adList[vertex]) {
      this.adList[vertex] = new Set();
    }
  }
  adEdge(vertex1, vertex2) {
    if (!this.adList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adList[vertex1].add(vertex2);
    this.adList[vertex2].add(vertex2);
  }
  Display() {
    for (let vertex in this.adList) {
      console.log(vertex + "->" + [...this.adList[vertex]]);
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