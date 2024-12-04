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
    evenStackSort(){
        let tempStack=[]
        let evenStack=[]
        while (this.table.length>0) {
            const temp=this.table.pop()
            if(temp%2==0){
                evenStack.push(temp)
            }

        }
        // console.log(evenStack)
        while(evenStack.length>0){
            let temp=evenStack.pop()
            while(tempStack.length>0&&tempStack[tempStack.length-1]>temp){
                evenStack.push(tempStack.pop())
            }
            tempStack.push(temp)
        }
        return tempStack
    }
}
const stack = new Stack();
const arr = [3, 4, 5, 667, 8, 3, 45, 42, 1, 4];

for (let ele of arr) {
  stack.push(ele);
}
console.log(stack.evenStackSort())