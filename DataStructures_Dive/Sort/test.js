const arr = [5, 23, 54, 54, 5, 79, 25, 111, 1, 135, 6];


// insertion sort()

function insertion(arr){
    for(let i=0;i<arr.length;i++){
        let key=arr[i]
        let j=i-1
        while(j>=0&&arr[j]>key){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]=key
        // i++                                                                             ~
    }
    return arr
}
console.log(insertion(arr))