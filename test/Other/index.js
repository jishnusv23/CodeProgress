// class Graph{
//     constructor(){
//         this.adlist=[]
//     }
//     addVertext(vertex){
//         if(!this.adlist[vertex]){
//             this.adlist[vertex]=new Set()
//         }
//     }
//     adEges(vertex1,vertex2){
//         if(!this.adlist[vertex1]){
//             this.addVertext(vertex1)
//         }
//         if(!this.adlist[vertex2]){
//             this.addVertext(vertex2)
//         }
//         this.adlist[vertex1].add(vertex2)
//         this.adlist[vertex2].add(vertex1)
//     }
//     //cycle graph or not 
//     hasCycle(vertex,visited=new Set(),parent=null){
//         visited.add(vertex)
//         for(let vetexcyel of this.adlist[vertex]){
//             if(parent!=null){
//             if(this.hasCycle(vetexcyel,visited,vertex)){
//                     return true
//                 }
//             }

//         }
//         return false
//     }
//     Display(){
//         for(let vertex in this.adlist){
//             console.log(vertex+"=>"+[...this.adlist[vertex]])
//         }
//     }
// }
// const graph=new Graph()
// graph.addVertext("A")
// graph.addVertext("B")
// graph.addVertext("C")
// graph.adEges('A',"C")
// graph.adEges('B',"A")
// graph.adEges('C',"A")
// graph.Display()
// console.log(graph.hasCycle("A"))


//even numbernumbers
class Stack{
    constructor(){
        this.table=[]
    }
    push(value){
        this.table.push(value)
    }
    pop(){
       return this.table.pop()
    }

    EvenStack(){
        let temp=[]
        
        while(this.table.length>0){
            let even=this.table.pop()
            if(even%2==0){

                temp.push(even)
            }
        }
        return temp.sort((a,b)=>a-b)
        
    }
}
let arr=[3,4,5,6,7,8,10,34,23,2,1]
const stack=new Stack()
for(let i=0;i<arr.length;i++){
    stack.push(arr[i])
}
console.log(stack.EvenStack());
// // even numbers
// function EvenNumber(){
//     let tempStack=new Stack()


// }