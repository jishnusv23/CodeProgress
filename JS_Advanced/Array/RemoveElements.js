array = [2, 3, 4, 5, 6, 7, 8, 9, 65, 5, 5, 4];

let removeElements=(array,ele)=>{
    for( let i=0;i<array.length;i++){
        if(array[i]===ele){
            array.splice(i,1)
            i--
        }
    }
}
console.log(array)
removeElements(array,5)
console.log(array)