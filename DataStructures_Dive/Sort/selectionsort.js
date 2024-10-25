
function SelectionSort(arr){
    let minIndex
    for(let i=0;i<arr.length;i++){
        minIndex=i

        for(let j=i+1;j<arr.length-1;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j
            }
        }
        if(minIndex!==i){
            let temp=arr[i]
            arr[i]=arr[minIndex]
            arr[minIndex]=temp
        }
    }
    return arr
}


const arr = [3, 4, 56, -90, -78, -67, 676];
console.log(SelectionSort(arr))
