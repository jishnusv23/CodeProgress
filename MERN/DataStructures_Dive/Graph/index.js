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
  //Remove Vertex.....................
  removeEdges(vertex1, vertex2) {
    this.adlist[vertex1].delete(vertex2);
    this.adlist[vertex2].delete(vertex1);
  }
  removeVertex(vertex) {
    if (!this.adlist[vertex]) {
      return;
    }
    for (let addvertex of this.adlist[vertex]) {
      this.removeEdges(vertex, addvertex);
    }
    delete this.adlist[vertex];
  }
  hasEdges(vertex1, vertex2) {
    return this.adlist[vertex1].has(vertex2)&&this.adlist[vertex2].has(vertex1);
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
// console.log('_______________________________________________________________________________________________')
// graph.removeVertex("B");
// graph.Display();
