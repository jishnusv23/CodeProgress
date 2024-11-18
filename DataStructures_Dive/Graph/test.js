class GraphTest{
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
  }
  removeEdges(vertex1,vertex2){
    this.adlist[vertex1].delete(vertex2)
    this.adlist[vertex2].delete(vertex1)
  }
  remove(vertex){
    if(!this.adlist[vertex]){
      return
    }
    for(let vertex2 of this.adlist[vertex]){
      this.removeEdges(vertex,vertex2)
    }
    delete this.adlist[vertex]
  }
  Display(){
    for (const vertext in this.adlist) {
      console.log(vertext+"->"+[...this.adlist[vertext]])
    }
  }
  hasEdges(vertex1,vertex2){
    return this.adlist[vertex1].has(vertex2)&&this.adlist[vertex2].has(vertex1)
  }
  bfs(startVertex){
    let visited={}
    let queue=[startVertex]
    visited[startVertex]=true
    while (queue.length>0) {
      let current=queue.shift()
      console.log(current)
      for(let neighbor of this.adlist[current]){
        if(!visited[neighbor]){
          queue.push(neighbor)
          visited[neighbor]=true
        }
      }
    }
  }
  Dfs(startVertex){
    let visited={}
    let stack=[]
    visited[startVertex]=true
    while (stack.length) {
      let curent=stack.pop()
      console.log(curent)
      for(let neighbor of this.adlist[curent]){
        if(!visited[neighbor]){
          stack.push(neighbor)
          visited[neighbor]=true
        }
      }
    }
  }
  hasCycle(vertex,visited=new Set(),parent=null){
    visited.add(vertex)
    for(let ele of this.adlist[vertex]){
      if(!visited.has(ele)){
        if(this.hasCycle(ele,visited,vertex)){
          return true
        }

      }else if (ele!==parent){
        return true
      }

    }
    return false
  }
}