const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

function FindUncommon(arr1,arr2){
    let arr=[]
    for(let i=0;i<arr1.length;i++){
        if(!arr2.includes(arr1[i])){
            arr.push(arr1[i])
        }
    }
    for(let i=0;i<arr2.length;i++){
        if(!arr1.includes(arr2[i])){
            arr.push(arr2[i])
        }
    }
    return arr

}
console.log(FindUncommon(array1,array2))