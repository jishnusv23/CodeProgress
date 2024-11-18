class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class TestBST{
    constructor(){

        this.root=null
    }
    isEmpty(){
        return this.root==null
    }
    Insert(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
            InserNode(this.root,node)
        }
    }
    InserNode(root,node){
        if(node.value<root.value){
            if(root.left==null){
                this.root=node
            }else{
                this.InserNode(root.left,node)
            }
        }else{
            if(root.right==null){
                root.right=node
            }else{
                this.InserNode(root.right,node)
            }
        }
    }
    Inorder(root){
        if(root){
            this.Inorder(root.left)
            console.log(root.value)
            this.Inorder(root.right)
        }
    }
    PreOrder(root){
        if(root){
            console.log(root.value)
            this.PreOrder(root.left)
            this.PreOrder(root.right)
        }
    }
    PostOrder(root){
        if(root){
            this.PostOrder(root.left)
            this.PostOrder(root.right)
            console.log(root.value)
        }
    }
    min(root){
        if(!root.left) return root.value

        return this.min(root.left)
    }
    max(root){
        if(!root.right) return root.value
        return this.max(root.right)
    }
    levelOrder(){
        let queue=[]
        queue.push(this.root)
        while(queue.length){
            const current=queue.shift()
            console.log(current.value)
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }
    }
}