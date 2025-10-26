class GraphCycle{
    constructor(){
        this.adlist=[]
    }
    addVertex(vertex){
    if(!this.adlist[vertex]){
        this.adlist[vertex]=new Set()
    }

  }
  addEdges(vertex1,vertex2){
    if(!this.adlist[vertex1]){
        this.addVertex(vertex1)
    }
    if(!this.adlist[vertex2]){
        this.addVertex(vertex2)
    }
    this.adlist[vertex1].add(vertex2)
    this.adlist[vertex2].add(vertex1)
  }
  hasCycle(vertex,visited=new Set(),parent=null){
    visited.add(vertex)
    for (const ele of this.adlist[vertex]) {
        if(!visited.has(ele)){
            if(this.hasCycle(ele,visited,vertex)){
                return true
            }
        }else if(ele!==parent){
            return true
        }
    }
    return false
  }

}
const graph = new GraphCycle();


graph.addEdges("A", "B");
graph.addEdges("B", "C");
graph.addEdges("C", "D");
graph.addEdges("D", "E");
graph.addEdges("E", "B"); 

// Check for cycles
const startVertex = "A";
if (graph.hasCycle(startVertex)) {
  console.log("The graph has a cycle.");
} else {
  console.log("The graph does not have a cycle.");
}
