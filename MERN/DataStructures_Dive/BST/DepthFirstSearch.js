class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null

    }
}

class BSTDepthFirstSearch{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    Insert(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
            this.InsertNode(this.root,node)
        }
    }
    InsertNode(root,node){
     if(node.value<root.value){
        if(root.left==null){
            root.left=node
        }else{
            this.InsertNode(root.left,node)
        }
     }else{
        if(root.right==null){
            root.right=node
        }else{
            this.InsertNode(root.right,node)
        }
     }   
    }
    //DFS 
    //InOrder
    InOrder(root){
        if(root){
            this.InOrder(root.left)
            console.log(root.value)
            this.InOrder(root.right)
        }
    }

    //PreOrder
    PreOrder(root){
        if(root){
            console.log(root.value)
            this.PreOrder(root.left)
            this.PreOrder(root.right)
        }
    }

    //PostOrder()
    PostOrder(root){
        if(root){
            this.PostOrder(root.left)
            this.PostOrder(root.right)
            console.log(root.value)
        }
    }

}
const tree = new BSTDepthFirstSearch();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.InOrder(tree.root);