// evenSortNumber;

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
    EvenSortNumber(){
        let tempStack=[]
        let eventStack=[]
        while(this.table.length>0){
            let temp=this.table.pop()
            if(temp%2==0){
                tempStack.push(temp)
            }

        }
        while (tempStack.length>0) {
            let temp=tempStack.pop()

            while(eventStack.length>0&&eventStack[eventStack.length-1]>temp){
                tempStack.push(eventStack.pop())
            }
            eventStack.push(temp)
        }
        return eventStack
    }

}
const stack=new Stack()




const arr = [3, 4, 5, 667, 8, 3, 45, 42, 1, 4];
for(let ele of arr){
    stack.push(ele)
}
console.log(stack.EvenSortNumber())
// [(4, 4, 8, 42)];